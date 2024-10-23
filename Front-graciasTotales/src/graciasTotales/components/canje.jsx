import React from 'react'
import { UseCanjesStore } from '../hooks/useCanjesStore';
import Swal from 'sweetalert2';
import { UseProducts } from '../hooks/useProducts';

export const Canje = ({ c }) => {

    const { startLoadCanjeWithId } = UseCanjesStore();
    const { selectProduct } = UseProducts();
    const productoFind = selectProduct(c.idProducto);
    c = {
        ...c,
        producto: productoFind
    }

    const verComprobante = async () => {
        try {

            const { data } = await startLoadCanjeWithId(c.id);
            const { id, reclamado } = data.busqueda

            const linea1 = `Id: ${id}`
            const linea2 = `Reclamado: ${reclamado ? 'Si' : 'No'}`
            console.log(data);
            Swal.fire({
                title: data.busqueda.titulo,
                html: `${linea1}<br>${linea2}`,
                imageUrl: c.imagen,
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: "Custom image"
            });
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: 'El producto no se encuentra disponible para canjear, pruebe más tarde',

            });
        }
    }

    return (
        <>
            <p className="d-inline-flex gap-1">
                <a className={`btn btn-${c.reclamado ? 'secondary' : 'primary'}`} data-bs-toggle="collapse" href={`#collapseExample${c.id}`} role="button" aria-expanded="false" aria-controls={`collapseExample${c.idProducto}`}>
                    {c.titulo}
                </a>

            </p>
            <div className="collapse" id={`collapseExample${c.id}`}>
                <div className="card mb-3" style={{ maxWidth: '540px' }}>
                    <div className="row g-0">
                        <div className="col-md-4">
                            <img src={c.producto.Imagenes[0]} className="img-fluid rounded-start" alt="Imagen de c" style={{ height: '100%' }} />
                        </div>
                        <div className="col-md-8">
                            <div className="card-body">
                                <h5 className="card-title">{c.titulo}</h5>
                                <br></br>
                                <p className="card-text">{c.producto.descripcion}</p>
                                <p className="card-text"><small className="text-body-secondary">Reclamado: {c.reclamado ? 'Si' : 'No'}</small></p>
                                <button type="button" className="btn btn-link" style={{ fontSize: '12px', alignSelf: 'flex-end' }} onClick={verComprobante}>Ver comprobante</button>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
