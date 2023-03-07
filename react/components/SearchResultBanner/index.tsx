import React, { useState, useEffect } from "react";
import { useCssHandles } from 'vtex.css-handles';
import { useDevice } from 'vtex.device-detector';
import CSS_HANDLES from "../../typings/cssHandles";
import useConfigValidation from "../../hooks/useConfigValidation";
import './styles.css';

const SearchResultBanner = () => {

  //ESTADOS
  const [configuracionesBanner, setConfiguracionesBanner] = useState<SearchResultBannerProps[]>([]);

  //DEVICE DETECTOR
  const { device } = useDevice();

  //CSS HANDLES
  const handles = useCssHandles(CSS_HANDLES);

  //CONTEXTO DE CONFIGURACIONES
  const contextoConfiguraciones:any = useConfigValidation(configuracionesBanner);

  //EFECTOS
  useEffect(() => {
    const fetchData = async () => {
      await fetch('/api/dataentities/AE/search?_fields=estaActivo,fechaFinal,fechaInicio,idAgrupacion,imagenBannerDesktop,imagenBannerMobile,programarEntreFechas,tipoAgrupacion,tituloBanner,urlRedireccion', {
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/vnd.vtex.ds.v10+json",
          "REST-Range": "resources=0-99"
        }
      })
      .then((response) => {
        if(!response.ok) {
            throw new Error();
        }
        return response.json();
      })
      .then((data) => {
        setConfiguracionesBanner(data);
      })
      .catch((e) => {
        console.log(e)
      });
      }
      fetchData()
  },[])

  //JSX
  if(contextoConfiguraciones.configuracionResultadoBusqueda) {
    if(contextoConfiguraciones.configuracionResultadoBusqueda.programarEntreFechas) {
      const ahora = new Date();
      const inputFechaInicio = new Date(contextoConfiguraciones.configuracionResultadoBusqueda.fechaInicio.split("+")[0]);
      const inputFechaFinal = new Date(contextoConfiguraciones.configuracionResultadoBusqueda.fechaFinal.split("+")[0]);
      if(ahora.getTime() > inputFechaInicio.getTime() && ahora.getTime() < inputFechaFinal.getTime()) {
        return(
          <a
            className={`${handles['banner-busqueda__general-container']}`}
            href={contextoConfiguraciones.configuracionResultadoBusqueda.urlRedireccion}
          >
            {
              device === 'phone' &&
              <img
                alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerMobile}
              />
            }
            {
              device !== 'phone' &&
              <img
                alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerDesktop}
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
              device === 'phone' &&
              <img
                alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerMobile}
              />
            }
            {
              device !== 'phone' &&
              <img
                alt={contextoConfiguraciones.configuracionResultadoBusqueda.tituloBanner}
                src={contextoConfiguraciones.configuracionResultadoBusqueda.imagenBannerDesktop}
              />
            }
          </a>
        )
      }
    }
  }
  return(
    <div className={`${handles['banner-busqueda__null-container']}`}></div>
  )
}

export default SearchResultBanner;
