import React, { useEffect, useState } from "react";
import { useProduct } from 'vtex.product-context';
import { useCssHandles } from 'vtex.css-handles';
import { ProductPageMinibannerSchema } from "../../schema/bannersSchema";
import CSS_HANDLES from "../../typings/cssHandles";
import './styles.css';

const ProductPageMinibanner = ({listaDeSku}:ProductPageMinibannerProps) => {

  //CONTEXTO DE PRODUCTO
  const contexoProducto = useProduct();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //ESTADOS
  const [informacionSku, setInformacionSku] = useState<ProductPageMinibanner | null>(null);

  //EFECTOS
  useEffect(() => {
    if(listaDeSku) {
      for(let sku of listaDeSku) {
        const inputSkuId = sku.skuId.split("-");
        if(inputSkuId.includes(contexoProducto.selectedItem.itemId)) {
          setInformacionSku(sku);
          return;
        }
      }
      setInformacionSku(null);
    } else {
      setInformacionSku(null);
    }
  },[contexoProducto])

  //JSX
  if(informacionSku && informacionSku.condicionalFechas.programarFechas === 'Si') {
    const ahora = new Date();
    const inputFechaInicio = new Date(informacionSku.condicionalFechas.fechaInicio);
    const inputFechaFinal = new Date(informacionSku.condicionalFechas.fechaFinal);
    if(ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
      if(informacionSku.content.tipoBanner === 'Imagen') {
        return(
          <a
            target="_blank"
            rel="noreferrer noopener"
            href={informacionSku.urlRedireccion}
            className={`${handles['pdp-minibanner__imagen-container']}`}
          >
            <img alt={informacionSku.tituloBanner} src={informacionSku.content.ImagenMinibanner}/>
          </a>
        )
      }
      return(
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={informacionSku.urlRedireccion}
          className={`${handles['pdp-minibanner__texto-container']}`}
        >
            <p>{informacionSku.content.TextoMinibanner}<span>AQUÍ</span></p>
        </a>
      )
    }
  } else {
    if(informacionSku && informacionSku.estaActivo) {
      if(informacionSku.content.tipoBanner === 'Imagen') {
        return(
          <a
            href={informacionSku.urlRedireccion}
            target="_blank"
            rel="noreferrer noopener"
            className={`${handles['pdp-minibanner__imagen-container']}`}
          >
            <img alt={informacionSku.tituloBanner} src={informacionSku.content.ImagenMinibanner}/>
          </a>
        )
      }
      return(
        <a
          target="_blank"
          rel="noreferrer noopener"
          href={informacionSku.urlRedireccion}
          className={`${handles['pdp-minibanner__texto-container']}`}
        >
            <p>{informacionSku.content.TextoMinibanner}<span>AQUÍ</span></p>
        </a>
      )
    }
  }

  return null;
}

ProductPageMinibanner.schema = ProductPageMinibannerSchema;

export default ProductPageMinibanner;
