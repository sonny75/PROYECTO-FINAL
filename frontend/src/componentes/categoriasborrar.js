import axios from 'axios';
import Swal from 'sweetalert2';
//import {useNavigate} from 'react-router'
function CategoriasBorrar(codigo)
{  
    //const navegar = useNavigate()

    function categoriasRefrescar()
    {
        //navegar('/')
        window.location.href="/categorias";
    }
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
            buttonsStyling: false
        })
        swalWithBootstrapButtons.fire({title: '¿Realmente desea eliminar este registro?',
        text: "No es posible revertir este cambio",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Confirmar',
        cancelButtonText: 'Cancelar',
        reverseButtons: false
        }).then((result) => {
        if (result.isConfirmed) {
            axios.delete(`/api/categorias/borrar/${codigo}`)
            .then(() => this.setState({ status: 'Borrado Exitoso' }));
            categoriasRefrescar()

            swalWithBootstrapButtons.fire(
                '¡Operación Exitosa!',
                'El registro ha sido eliminado exitosamente',
                'success'
            )
        } else if (
            result.dismiss === Swal.DismissReason.cancel
            ) {
            swalWithBootstrapButtons.fire(
                '¡ERROR!',
                'El registro no pudo ser eliminado',
                'error'
                )
            }
        })
        
    }
 export default CategoriasBorrar;    
            
