import {
  handleChangeText,
  handleGetCurrentLocation
} from "../utils/weather/weatherUtils";

import {
  handleChangeConversion
} from "../utils/data/dataProcessing";

export const header__content = {
  label: "header",
  link: "",
  id: "header",
  ref: "",
  type: "header",
  class: [
    {
      label: "hide",
      link: "",
      id: "c_1",
      ref: "header",
      type: "class",
      element: "className",
      icon: "",
      parts: [],
      data: []
    }
  ],
  icon: "",
  parts: [
    {
      label: "4cast",
      link: "",
      id: "h_1",
      ref: "header",
      type: "mainTitle",
      element: "h1",
      class: [],
      icon: "",
      parts: [],
      data: []
    }
  ],
  data: [],
  func: null
};

export const footer__content = {
  label: "footer",
  link: "",
  id: "footer",
  ref: "",
  type: "footer",
  class: [],
  icon: "",
  parts: [
    {
      label: "",
      link: "",
      id: "ftp_1",
      ref: "footer",
      type: "text",
      element: "p",
      class: [],
      icon: "",
      parts: [
        {
          label: "Coded by",
          link: "",
          id: "ftspan_1",
          ref: "footer",
          type: "text",
          element: "span",
          class: [],
          icon: "",
          parts: [],
          data: []
        },
        {
          label: "Frouke Buyse-Assaf",
          link: "https://www.facebook.com/profile.php?id=100011123085509",
          id: "fta_1",
          ref: "footer",
          type: "link",
          element: "a",
          class: [],
          icon: "",
          parts: [],
          data: []
        },
        {
          label: "Github",
          link: "https://github.com/FroukeA/weather__app--react",
          id: "fta_2",
          ref: "footer",
          type: "link",
          element: "a",
          class: [],
          icon: "",
          parts: [],
          data: []
        }
      ]
    }
  ],
  data: [],
  func: null
};

export const weather__content = {
  label: "weather",
  link: "",
  id: "weather",
  ref: "",
  type: "section",
  class: [],
  icon: "",
  parts: [
    {
      label: "",
      link: "",
      id: "whd_1",
      ref: "weather",
      type: "header",
      element: "header",
      class: [
        {
          label: "hide",
          link: "",
          id: "whc_1",
          ref: "weather",
          type: "class",
          element: "className",
          icon: "",
          parts: []
        }
      ],
      icon: "",
      parts: [
        {
          label: "Weather",
          link: "",
          id: "wh_1",
          ref: "weather",
          type: "title",
          element: "h2",
          class: [],
          icon: "",
          parts: [],
          data: []
        }
      ],
      data: []
    },
    {
      label: "Weather article",
      link: "",
      id: "wa_1",
      ref: "weather",
      type: "part",
      element: "article",
      class: [
        {
          label: "grid",
          link: "",
          id: "c_11",
          ref: "weather",
          type: "class",
          element: "className",
          icon: "",
          parts: [],
          data: []
        }
      ],
      icon: "",
      parts: [
        {
          label: "",
          link: "",
          id: "wahdd_1",
          ref: "weather",
          type: "header",
          element: "header",
          class: [
            {
              label: "left",
              link: "",
              id: "c_11",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            },
            {
              label: "location",
              link: "",
              id: "c_11",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: true,
          parts: [
            {
              label: "city name",
              link: "name",
              id: "wh_2",
              ref: "weather",
              type: "title",
              element: "h3",
              parentId: "wahdd_1",
              class: [
                {
                  label: "location",
                  link: "",
                  id: "c_11",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              parts: [],
              data: []
            },
            // {
            //   label: "favorite",
            //   link: "",
            //   id: "wcbi_1",
            //   ref: "weather",
            //   type: "customBoxInput",
            //   element: "checkbox",
            //   class: [
            //     {
            //       label: "favorite",
            //       link: "",
            //       id: "c_14",
            //       ref: "weather",
            //       type: "class",
            //       element: "className",
            //       icon: "",
            //       parts: [],
            //       data: []
            //     }
            //   ],
            //   icon: "",
            //   parts: [],
            //   data: []
            // }
            // {
            //   label: "favorite",
            //   link: "",
            //   id: "wi_1",
            //   ref: "weather",
            //   type: "checkbox",
            //   element: "input",
            //   class: [],
            //   icon: "",
            //   parts: [],
            //   data: []
            // },
            // {
            //   label: "Favorite",
            //   link: "",
            //   id: "wl_1",
            //   ref: "weather",
            //   type: "fieldTitle",
            //   element: "label",
            //   class: [],
            //   icon: "",
            //   parts: [],
            //   data: []
            // }
          ],
          data: []
        },
        {
          label: "",
          link: "",
          id: "wd_5",
          ref: "weather",
          type: "div",
          element: "div",
          class: [
            {
              label: "temperature",
              link: "",
              id: "c_10",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [
            {
              label: "div",
              link: "",
              id: "wd_6",
              ref: "weather",
              type: "div",
              element: "div",
              class: [
                {
                  label: "row",
                  link: "",
                  id: "c_9",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              parts: [
                {
                  label: "list",
                  link: "",
                  id: "wlt_2",
                  ref: "weather",
                  type: "list",
                  element: "dl",
                  class: [],
                  icon: "",
                  parts: [
                    {
                      label: "",
                      link: "",
                      id: "wldd_2",
                      ref: "weather",
                      type: "div",
                      element: "div",
                      class: [],
                      icon: "",
                      dataParent: true,
                      parts: [
                        {
                          label: "Temperature",
                          link: "",
                          id: "wdt_2",
                          ref: "weather",
                          type: "term",
                          element: "dt",
                          class: [
                            {
                              label: "hide",
                              link: "",
                              id: "c_1",
                              ref: "weather",
                              type: "class",
                              element: "className",
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          icon: "",
                          parts: [],
                          data: []
                        },
                        {
                          label: "temp",
                          link: "temp",
                          id: "wdd_2",
                          ref: "weather",
                          type: "description",
                          element: "dd",
                          class: [
                            {
                              label: "bigger",
                              link: "",
                              id: "c_3",
                              ref: "weather",
                              type: "class",
                              element: "className",
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          icon: "",
                          parentId: "wldd_2",
                          parts: [],
                          data: []
                        }
                      ],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "list",
                  link: "",
                  id: "wlt_3",
                  ref: "weather",
                  type: "list",
                  element: "ul",
                  class: [],
                  icon: "",
                  parts: [
                    {
                      label: "Celsius",
                      link: "",
                      id: "wli_1",
                      ref: "weather",
                      type: "item",
                      element: "li",
                      class: [],
                      icon: "",
                      parts: [
                        {
                          label: "C",
                          link: "",
                          id: "wcbi_3",
                          ref: "weather",
                          type: "customBoxInput",
                          element: "radio",
                          class: [
                            {
                              label: "temp",
                              link: "",
                              id: "c_14",
                              ref: "weather",
                              type: "class",
                              element: "className",
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          icon: "",
                          parts: [],
                          data: [],
                          checked: true,
                          function: handleChangeConversion.bind(this, 'celsius')
                        }
                        // {
                        //   label: "celsius",
                        //   link: "",
                        //   id: "wi_3",
                        //   ref: "weather",
                        //   type: "checkbox",
                        //   element: "input",
                        //   class: [],
                        //   icon: "",
                        //   parts: [],
                        //   data: []
                        // },
                        // {
                        //   label: "Celsius",
                        //   link: "",
                        //   id: "wl_3",
                        //   ref: "weather",
                        //   type: "fieldTitle",
                        //   element: "label",
                        //   class: [],
                        //   icon: "",
                        //   parts: [],
                        //   data: []
                        // }
                      ]
                    },
                    {
                      label: "Fahrenheit",
                      link: "",
                      id: "wli_1",
                      ref: "weather",
                      type: "item",
                      element: "li",
                      class: [],
                      icon: "",
                      parts: [
                        {
                          label: "F",
                          link: "",
                          id: "wcbi_3",
                          ref: "weather",
                          type: "customBoxInput",
                          element: "radio",
                          class: [
                            {
                              label: "temp",
                              link: "",
                              id: "c_14",
                              ref: "weather",
                              type: "class",
                              element: "className",
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          icon: "",
                          parts: [],
                          data: [],
                          checked: false,
                          function: handleChangeConversion.bind(this, 'fahrenheit')
                        }
                        // {
                        //   label: "fahrenheit",
                        //   link: "",
                        //   id: "wi_4",
                        //   ref: "weather",
                        //   type: "checkbox",
                        //   element: "input",
                        //   class: [],
                        //   icon: "",
                        //   parts: [],
                        //   data: []
                        // },
                        // {
                        //   label: "Fahrenheit",
                        //   link: "",
                        //   id: "wl_4",
                        //   ref: "weather",
                        //   type: "fieldTitle",
                        //   element: "label",
                        //   class: [],
                        //   icon: "",
                        //   parts: [],
                        //   data: []
                        // }
                      ],
                      data: []
                    }
                  ],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        },
        {
          label: "list",
          link: "",
          id: "wlt_4",
          ref: "weather",
          type: "list",
          element: "dl",
          class: [
            {
              label: "feature",
              link: "",
              id: "c_10",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [
            {
              label: "row",
              link: "",
              id: "wd_8",
              ref: "weather",
              type: "div",
              element: "div",
              class: [
                {
                  label: "row",
                  link: "",
                  id: "c_9",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              parts: [
                {
                  label: "div",
                  link: "",
                  id: "wdd_11",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "row",
                      link: "",
                      id: "c_9",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "lowest temperature",
                      link: "",
                      id: "wdt_4",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "temp low",
                      link: "temp.low",
                      id: "wdd_4",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "lowTemp",
                          link: "",
                          id: "c_4",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_11",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "div",
                  link: "",
                  id: "wdd_12",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "row",
                      link: "",
                      id: "c_9",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "highest temperature",
                      link: "",
                      id: "wdt_4",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "temp high",
                      link: "temp.high",
                      id: "wdd_4",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "highTemp",
                          link: "",
                          id: "c_4",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_12",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }
              ],
              data: []
            },
            {
              label: "div",
              link: "",
              id: "wd_15",
              ref: "weather",
              type: "div",
              element: "div",
              class: [
                {
                  label: "row",
                  link: "",
                  id: "c_9",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              parts: [
                {
                  label: "div",
                  link: "",
                  id: "wdd_17",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "description",
                      link: "",
                      id: "wdt_6",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "description",
                      link: "description",
                      id: "wdd_6",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [],
                      icon: "",
                      parentId: "wdd_17",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "item",
                  link: "",
                  id: "wdd_18",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "rain",
                      link: "",
                      id: "wdt_7",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "...mm/h",
                      link: "rain",
                      id: "wdd_7",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "rain",
                          link: "",
                          id: "c_5",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_18",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "item",
                  link: "",
                  id: "wdd_19",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "wind",
                      link: "",
                      id: "wdt_7",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "...km/h",
                      link: "wind_speed",
                      id: "wdd_7",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "wind",
                          link: "",
                          id: "c_6",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_19",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "item",
                  link: "",
                  id: "wdd_22",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "humidity",
                      link: "",
                      id: "wdt_8",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "...%",
                      link: "humidity",
                      id: "wdd_8",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "humidity",
                          link: "",
                          id: "c_5",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_22",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "item",
                  link: "",
                  id: "wdd_20",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "sunrise",
                      link: "",
                      id: "wdt_7",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "00:00",
                      link: "sunrise",
                      id: "wdd_7",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "sunrise",
                          link: "",
                          id: "c_7",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_20",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "item",
                  link: "",
                  id: "wdd_21",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "sunset",
                      link: "",
                      id: "wdt_9",
                      ref: "weather",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "00:00",
                      link: "sunset",
                      id: "wdd_9",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "sunset",
                          link: "",
                          id: "c_8",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parentId: "wdd_21",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        },
        {
          label: "list",
          link: "",
          id: "wlt_1",
          ref: "weather",
          type: "list",
          element: "dl",
          class: [
            {
              label: "day",
              link: "",
              id: "c_11",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [
            {
              label: "",
              link: "",
              id: "wld_1",
              ref: "weather",
              type: "div",
              element: "div",
              class: [],
              icon: "",
              dataParent: true,
              parts: [
                {
                  label: "Day",
                  link: "",
                  id: "wdt_1",
                  ref: "weather",
                  type: "term",
                  element: "dt",
                  class: [
                    {
                      label: "hide",
                      link: "",
                      id: "c_1",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  parts: [],
                  data: []
                },
                {
                  label: "Dayname",
                  link: "dt",
                  id: "wdd_1",
                  ref: "weather",
                  type: "description",
                  element: "dd",
                  class: [
                    {
                      label: "dayname",
                      link: "",
                      id: "c_10",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  parentId: "wld_1",
                  parts: [],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        },
        {
          label: "",
          link: "",
          id: "wd_1",
          ref: "weather",
          type: "div",
          element: "div",
          class: [
            {
              label: "searchEngine",
              link: "",
              id: "c_10",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [
            {
              label: "row",
              link: "",
              id: "wd_2",
              ref: "weather",
              type: "div",
              element: "div",
              class: [
                {
                  label: "row",
                  link: "",
                  id: "c_10",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              parts: [
                {
                  label: "item",
                  link: "",
                  id: "wd_3",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [],
                  icon: "",
                  parts: [
                    {
                      label: "Current location",
                      link: "",
                      id: "wb_1",
                      ref: "weather",
                      type: "button",
                      element: "button",
                      class: [
                        {
                          label: "primary",
                          link: "",
                          id: "c_10",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: [],
                      function: handleGetCurrentLocation.bind(this,)
                    }
                  ],
                  data: []
                },
                // {
                //   label: "search",
                //   link: "",
                //   id: "wcbi_2",
                //   ref: "weather",
                //   type: "customBoxInput",
                //   element: "checkbox",
                //   class: [
                //     {
                //       label: "search",
                //       link: "",
                //       id: "c_14",
                //       ref: "weather",
                //       type: "class",
                //       element: "className",
                //       icon: "",
                //       parts: [],
                //       data: []
                //     }
                //   ],
                //   icon: "",
                //   parts: [],
                //   data: []
                // },
                {
                  label: "search form",
                  link: "",
                  id: "f_search",
                  ref: "weather",
                  type: "form",
                  element: "form",
                  class: [
                    {
                      label: "row",
                      link: "",
                      id: "c_14",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        },
      ],
      data: "weather_Data"
    }
  ],
  data: []
};

export const forecast__content = {
  label: "forecast",
  link: "",
  id: "forecast",
  ref: "",
  type: "section",
  class: [],
  icon: "",
  parts: [
    {
      label: "",
      link: "",
      id: "fhd_1",
      ref: "forecast",
      type: "header",
      element: "header",
      class: [
        {
          label: "hide",
          link: "",
          id: "c_1",
          ref: "forecast",
          type: "class",
          element: "className",
          icon: "",
          parts: [],
          data: []
        }
      ],
      icon: "",
      parts: [
        {
          label: "ForeCast",
          link: "",
          id: "fh_1",
          ref: "forecast",
          type: "title",
          element: "h2",
          class: [],
          icon: "",
          parts: [],
          data: []
        }
      ],
      data: []
    },
    {
      label: "Forecast article",
      link: "",
      id: "fa_1",
      ref: "forecast",
      type: "part",
      element: "article",
      class: [],
      icon: "",
      parts: [
        {
          label: "",
          link: "",
          id: "fahd_1",
          ref: "forecast",
          type: "header",
          element: "header",
          class: [
            {
              label: "hide",
              link: "",
              id: "c_1",
              ref: "forecast",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [
            {
              label: "Forecast article title",
              link: "",
              id: "fh_2",
              ref: "forecast",
              type: "title",
              element: "h3",
              class: [],
              icon: "",
              parts: [],
              data: []
            }
          ],
          data: []
        },
        {
          label: "forcast list",
          link: "",
          id: "flt_1",
          ref: "forecast",
          type: "list--forecast",
          element: "dl",
          class: [],
          icon: "",
          parts: [
            {
              label: "card",
              link: "",
              id: "crd_1",
              ref: "forecast",
              type: "card",
              element: "card",
              class: [],
              icon: "",
              parts: [
                {
                  label: "structureChild",
                  link: "",
                  id: "fd_1",
                  ref: "forecast",
                  type: "cardContent",
                  element: "div",
                  class: [],
                  icon: "",
                  parts: [
                    {
                      label: "Day",
                      link: "",
                      id: "fdt_1",
                      ref: "forecast",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "f_2",
                          ref: "forecast",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "",
                      link: "",
                      id: "fdd_1",
                      ref: "forecast",
                      type: "description_group",
                      element: "dd",
                      class: [],
                      icon: "",
                      parts: [
                        {
                          label: "Daily article",
                          link: "",
                          id: "fad_1",
                          ref: "forecast",
                          type: "part",
                          element: "article",
                          class: [],
                          icon: "",
                          dataParent: true,
                          parts: [
                            {
                              label: "",
                              link: "",
                              id: "fahdd_1",
                              ref: "forcast",
                              type: "header",
                              element: "header",
                              class: [],
                              icon: "",
                              dataParent: true,
                              parts: [
                                {
                                  label: "23",
                                  link: "temp",
                                  id: "fh_2",
                                  ref: "forecast",
                                  type: "title",
                                  element: "h4",
                                  parentId: "fahdd_1",
                                  class: [
                                    {
                                      label: "big",
                                      link: "",
                                      id: "f_1",
                                      ref: "forecast",
                                      type: "class",
                                      element: "className",
                                      icon: "",
                                      parts: [],
                                      data: []
                                    }
                                  ],
                                  icon: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              data: []
                            },
                            {
                              label: "weather icon",
                              link: "",
                              id: "fp_1",
                              ref: "forecast",
                              type: "text",
                              element: "p",
                              class: [
                                {
                                  label: "01d",
                                  link: "",
                                  id: "c_1",
                                  ref: "forecast",
                                  type: "class",
                                  element: "className",
                                  icon: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              icon: "",
                              parts: [
                                {
                                  label: "weather type",
                                  link: "",
                                  id: "fs_2",
                                  ref: "forecast",
                                  type: "text",
                                  element: "span",
                                  class: [
                                    {
                                      label: "hide",
                                      link: "",
                                      id: "c_1",
                                      ref: "header",
                                      type: "class",
                                      element: "className",
                                      icon: "",
                                      parts: [],
                                      data: []
                                    }
                                  ],
                                  icon: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              data: []
                            },
                            {
                              label: "Monday",
                              link: "dt",
                              id: "fs_2",
                              ref: "forecast",
                              type: "text",
                              element: "p",
                              parentId: "fad_1",
                              class: [],
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          data: []
                        }
                      ],
                      data: []
                    }
                  ],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: "forecast_Data"
        }
      ],
      data: []
    }
  ],
  data: []
};

export const emptyCard = {
  label: "card",
  link: "",
  id: "crd_1",
  ref: "forecast",
  type: "card",
  element: "card",
  class: [],
  icon: "",
  parts: [
    {
      label: "structureChild",
      link: "",
      id: "fd_1",
      ref: "forecast",
      type: "cardContent",
      element: "div",
      class: [],
      icon: "",
      parts: [
        {
          label: "Day",
          link: "",
          id: "fdt_1",
          ref: "forecast",
          type: "term",
          element: "dt",
          class: [
            {
              label: "hide",
              link: "",
              id: "f_2",
              ref: "forecast",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          parts: [],
          data: []
        },
        {
          label: "",
          link: "",
          id: "fdd_1",
          ref: "forecast",
          type: "description_group",
          element: "dd",
          class: [],
          icon: "",
          parts: [
            {
              label: "Daily article",
              link: "",
              id: "fa_1",
              ref: "forecast",
              type: "part",
              element: "article",
              class: [],
              icon: "",
              parts: [
                {
                  label: "",
                  link: "",
                  id: "fahdd_1",
                  ref: "forcast",
                  type: "header",
                  element: "header",
                  class: [],
                  icon: "",
                  dataParent: true,
                  parts: [
                    {
                      label: "temp",
                      link: "temp",
                      id: "fh_2",
                      ref: "forecast",
                      type: "title",
                      element: "h4",
                      class: [
                        {
                          label: "big",
                          link: "",
                          id: "f_1",
                          ref: "forecast",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "weather icon",
                  link: "",
                  id: "fp_1",
                  ref: "forecast",
                  type: "text",
                  element: "p",
                  class: [
                    {
                      label: "01d",
                      link: "",
                      id: "c_1",
                      ref: "forecast",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  parts: [
                    {
                      label: "weather type",
                      link: "",
                      id: "fs_2",
                      ref: "forecast",
                      type: "text",
                      element: "span",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "c_1",
                          ref: "header",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                },
                {
                  label: "Monday",
                  // link: "data.day",
                  link: "",
                  id: "fs_2",
                  ref: "forecast",
                  type: "text",
                  element: "p",
                  class: [],
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        }
      ],
      data: []
    }
  ],
  data: []
}

export const nav__items = [];

export const forms = [
  {
    label: "search form data",
    link: "",
    id: "dataf_1",
    ref: "f_search",
    type: "form_data",
    element: "form_data",
    class: [],
    icon: "",
    parts: [
      {
        label: "search",
        link: "",
        id: "dataf_1",
        ref: "f_search",
        type: "form_data",
        element: "form_data",
        class: [],
        icon: "",
        step: 1,
        position: "end",
        visible: "true",
        parts: [
          {
            label: "search",
            link: "",
            id: "wi_3",
            ref: "weather",
            type: "search",
            element: "input",
            class: [],
            icon: "",
            parts: [],
            data: [],
            function: handleChangeText.bind(this)
          }
          // {
          //   label: "submit",
          //   link: "",
          //   id: "wi_4",
          //   ref: "weather",
          //   type: "field",
          //   element: "input",
          //   class: [],
          //   icon: "",
          //   parts: []
          // }
        ],
        data: []
      }
    ],
    data: []
  }
];
