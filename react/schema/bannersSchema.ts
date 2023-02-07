const ProductPageMinibannerSchema = {
  title: "Minibanner Pagina de Producto",
  description: "Minibanner ubicado en la Pagina de Producto",
  type: "object",
  properties: {
    listaDeSku: {
      title: "Lista de Sku's",
      type: "array",
      items: {
        properties: {
          tituloBanner: {
            title: "Titulo de Banner",
            type: "string"
          },
          skuId: {
            title: "SkuId del producto",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
            }
          },
          content: {
            title: "",
            type: "object",
            properties: {
              tipoBanner: {
                title: "Tipo de Banner",
                type: "string",
                enum: [
                  "Imagen",
                  "Texto"
                ],
                default: "Imagen"
              },
            },
            dependencies: {
              tipoBanner: {
                oneOf: [
                  {
                    properties: {
                      tipoBanner: {
                        enum: [
                          "Texto"
                        ]
                      },
                      TextoMinibanner: {
                        title: "Texto de Minibanner",
                        type: "string",
                        default: ''
                      }
                    }
                  },
                  {
                    properties: {
                      tipoBanner: {
                        enum: [
                          "Imagen"
                        ]
                      },
                      ImagenMinibanner: {
                        title: "Imagen de Minibanner",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "image-uploader"
                        }
                      }
                    }
                  }
                ]
              }
            }
          },
          urlRedireccion: {
            title: "Url de Redireccion",
            type: "string"
          },
          condicionalFechas: {
            title: "",
            type: "object",
            properties: {
              programarFechas: {
                title: "Programar Entre Fechas",
                type: "string",
                enum: [
                  "Si",
                  "No"
                ],
                default: "No"
              },
            },
            dependencies: {
              programarFechas: {
                oneOf: [
                  {
                    properties: {
                      programarFechas: {
                        enum: [
                          "Si"
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha de Inicio",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                    }
                  }
                ]
              }
            }
          },
          estaActivo: {
            title: "¿Esta Activo?",
            type: "boolean",
            default: true
          }
        }
      }
    },
  }
}

const SearchResultDesktopBannerSchema = {
  title: "Banner Pagina Resultado de Busqueda - Desktop",
  description: "Banner ubicado en el Resultado de Busqueda - Desktop",
  type: "object",
  properties: {
    configuracionesBanner: {
      title: "Lista de Configuraciones de Banners",
      type: "array",
      items: {
        properties: {
          tituloBanner: {
            title: "Titulo de Banner",
            type: "string"
          },
          imagenBannerDesktop: {
            title: "Imagen de Banner - Desktop",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Url de Redirección",
            type: "string",
            default: '#'
          },
          tipoAgrupacion: {
            title: "Tipo de Agrupación",
            type: "string",
            enum: [
              "Departamento",
              "Categoria",
              "SubCategoria",
              "Marca",
              "Coleccion"
            ],
            default: 'Departamento'
          },
          idAgrupacion: {
            title: "Id(s) de Agrupacion(es)",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "textarea"
          }
          },
          condicionalFechas: {
            title: "",
            type: "object",
            properties: {
              programarFechas: {
                title: "Programar Entre Fechas",
                type: "string",
                enum: [
                  "Si",
                  "No"
                ],
                default: "No"
              },
            },
            dependencies: {
              programarFechas: {
                oneOf: [
                  {
                    properties: {
                      programarFechas: {
                        enum: [
                          "Si"
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha de Inicio",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                      fechaFinal: {
                        title: "Fecha Final",
                        type: "string",
                        default: '',
                        widget: {
                          "ui:widget": "date-time"
                        }
                      },
                    }
                  }
                ]
              }
            }
          },
          estaActivo: {
            title: "¿Esta Activo?",
            type: "boolean",
            default: true
          }
        }
      }
    },
  }
}

const SearchResultMobileBannerSchema = {
  title: "Banner Pagina Resultado de Busqueda - Mobile",
  description: "Banner ubicado en el Resultado de Busqueda - Mobile",
  type: "object",
  properties: {
    configuracionesBanner: {
      title: "Lista de Configuraciones de Banners",
      type: "array",
      items: {
        properties: {
          tituloBanner: {
            title: "Titulo de Banner",
            type: "string"
          },
          imagenBannerTablet: {
            title: "Imagen de Banner - Tablet",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          imagenBannerCelular: {
            title: "Imagen de Banner - Celular",
            type: "string",
            default: '',
            widget: {
              "ui:widget": "image-uploader"
            }
          },
          urlRedireccion: {
            title: "Url de redirección",
            type: "string",
            default: '#'
          },
          tipoAgrupacion: {
            title: "Tipo de Agrupación",
            type: "string",
            enum: [
              "Departamento",
              "Categoria",
              "SubCategoria",
              "Marca",
              "Coleccion"
            ],
            default: 'Departamento'
          },
          idAgrupacion: {
            title: "Id(s) de Agrupacion(es)",
            type: "string",
            default: ''
          },
          condicionalFechas: {
            title: "",
            type: "object",
            properties: {
              programarFechas: {
                title: "Programar Entre Fechas",
                type: "string",
                enum: [
                  "Si",
                  "No"
                ],
                default: "No"
              },
            },
            dependencies: {
              programarFechas: {
                oneOf: [
                  {
                    properties: {
                      programarFechas: {
                        enum: [
                          "Si"
                        ]
                      },
                      fechaInicio: {
                        title: "Fecha de Inicio",
                        type: "string",
                        default: ''
                      },
                      fechaFinal: {
                        title: "Fecha Final",
                        type: "string",
                        default: ''
                      },
                    }
                  }
                ]
              }
            }
          },
          estaActivo: {
            title: "¿Esta Activo?",
            type: "boolean",
            default: true
          }
        }
      }
    },
  }
}

export { ProductPageMinibannerSchema, SearchResultDesktopBannerSchema, SearchResultMobileBannerSchema }

// YourComponent.schema = {
//   title: 'custom component',
//   description: 'custom component',
//   type: 'object',
//   properties: {
//     content: {
//         title: "",
//         type: "object",
//         properties: {
//             additionalDef: {
//                 title: "Tipo de Banner",
//                 enum: ["Texto", "Imagen"],
//                 type: "string",
//                 default: "Texto"
//             },
//         },
//         dependencies: {
//           additionalDef: {
//               oneOf: [
//                   {
//                       properties: {
//                           additionalDef: {
//                               enum: [
//                                   "Texto"
//                               ]
//                           },
//                           textMiniBanner: {
//                             title: 'Texto de minibanner',
//                             description: '',
//                             type: 'string',
//                             default: '',
//                           },
//                       }
//                   },
//                   {
//                     properties: {
//                         additionalDef: {
//                             enum: [
//                                 "Imagen"
//                             ]
//                         },
//                         ImageMiniBanner: {
//                           title: 'Imagen de Minibanner',
//                           type: 'string',
//                           default: '',
//                           widget: {
//                             'ui:widget': 'image-uploader',
//                           },
//                         },
//                     }
//                 }
//                 ]
//                 }
//               }
//       }
//   },

