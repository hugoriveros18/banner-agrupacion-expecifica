import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import CSS_HANDLES from "../../typings/cssHandles";
import { SearchResultDesktopBannerSchema } from "../../schema/bannersSchema";
import useConfigValidation from "../../hooks/useConfigValidation";
import './styles.css';

const SearchResultBannerDesktop = ({configuracionesBanner}:SearchResultBannerProps) => {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //CONTEXTO DE CONFIGURACIONES
  const contextoConfiguraciones = useConfigValidation(configuracionesBanner);

  //JSX
  if(contextoConfiguraciones.configuracionResultadoBusqueda) {
    if(contextoConfiguraciones.configuracionResultadoBusqueda.condicionalFechas.programarFechas === 'Si') {
      const ahora = new Date();
      const inputFechaInicio = new Date(contextoConfiguraciones.configuracionResultadoBusqueda.condicionalFechas.fechaInicio);
      const inputFechaFinal = new Date(contextoConfiguraciones.configuracionResultadoBusqueda.condicionalFechas.fechaFinal);
      if(ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
        return(
          <a
            className={`${handles['banner-busqueda__general-container']}`}
            href={contextoConfiguraciones.configuracionResultadoBusqueda.urlRedireccion}
          >
            <img
              alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
              src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerDesktop}
            />
          </a>
        )
      }
    } else {
      if(contextoConfiguraciones.configuracionResultadoBusqueda.estaActivo) {
        return(
          <a
            className={`${handles['banner-busqueda__general-container']}`}
            href={contextoConfiguraciones.configuracionResultadoBusqueda.urlRedireccion}
          >
            <img
              alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
              src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerDesktop}
            />
          </a>
        )
      }
    }
  }
  return(
    <div className={`${handles['banner-busqueda__null-container']}`}></div>
  )
}

SearchResultBannerDesktop.schema = SearchResultDesktopBannerSchema;

export default SearchResultBannerDesktop;
