const ProductPageMinibannerSchema = {
  title: "Minibanner Pagina de Producto",
  description: "Minibanner ubicado en la Pagina de Producto",
  type: "object",
  properties: {
    listaDeSku: {
      title: "Lista de Campañas",
      type: "array",
      items: {
        properties: {
          __editorItemTitle: {
            title: "Identificador Banner",
            type: "string",
            default: ""
          },
          tituloBanner: {
            title: "Titulo de Banner",
            type: "string"
          },
          tipoValidacion: {
            title: "Tipo de Validación",
            type: "string",
            enum: [
              'Sku',
              'Coleccion'
            ],
            default: 'Coleccion'
          },
          skuId: {
            title: "Identificador de Validacion",
            description: "Indique el ID del tipo de validacipon seleccionada. Para indicar mas de uno separar por comas (','), ej. 125,168",
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

export { ProductPageMinibannerSchema }
