import axios from 'axios';
import Swal from 'sweetalert2';
//import {useNavigate} from 'react-router'
function ProductosBorrar(codigo)
{    
    //const navegar = useNavigate()

    function productosRefrescar()
    {
        //navegar('/')
        window.location.href="/productos";
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
        
        axios.delete(`/api/productos/borrar/${codigo}`)
        .then(() => this.setState({ status: 'Borrado Exitoso' }));
        
        productosRefrescar()

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

export default ProductosBorrar;