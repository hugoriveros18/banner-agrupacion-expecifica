import React from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector'
import CSS_HANDLES from "../../typings/cssHandles";
import { SearchResultMobileBannerSchema } from "../../schema/bannersSchema";
import useConfigValidation from "../../hooks/useConfigValidation";
import './styles.css';

const SearchResultBannerMobile = ({configuracionesBanner}:SearchResultBannerProps) => {

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //DEVICE DETECTOR
  const { device } = useDevice();

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
            {
              device === 'tablet' &&
                <img
                  alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                  src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerTablet}
                />
            }
            {
              device === 'phone' &&
                <img
                  alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                  src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerCelular}
                />
            }
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
            {
              device === 'tablet' &&
                <img
                  alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                  src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerTablet}
                />
            }
            {
              device === 'phone' &&
                <img
                  alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                  src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerCelular}
                />
            }
          </a>
        )
      }
    }
  }
  return null
}

SearchResultBannerMobile.schema = SearchResultMobileBannerSchema;

export default SearchResultBannerMobile;
