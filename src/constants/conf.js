import {
  handleChangeText,
  handleGetCurrentLocation
} from "../utils/weather/weatherUtils";

import {
  handleChangeConversion
} from "../utils/data/dataProcessing";

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
                          id: "c_23",
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

// check clean
export const header__content = {
  label: "header",
  link: "",
  id: "header",
  ref: "header",
  type: "header",
  element: "",
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
  dataParent: false,
  parentId: "",
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
      dataParent: false,
      parentId: "",
      parts: [],
      data: []
    }
  ],
  data: [],
  func: null
};

// check clean
export const searchEngine__content = {
  label: "",
  link: "",
  id: "searchEngine",
  ref: "searchEngine",
  type: "div",
  element: "div",
  class: [
    {
      label: "searchEngine",
      link: "",
      id: "c_14",
      ref: "searchEngine",
      type: "class",
      element: "className",
      icon: "",
      parts: [],
      data: []
    }
  ],
  icon: "",
  dataParent: false,
  parentId: "",
  parts: [
    {
      label: "row",
      link: "",
      id: "sd_1",
      ref: "searchEngine",
      type: "div",
      element: "div",
      class: [
        {
          label: "row",
          link: "",
          id: "c_12",
          ref: "searchEngine",
          type: "class",
          element: "className",
          icon: "",
          parts: [],
          data: []
        }
      ],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "search form",
          link: "",
          id: "f_search",
          ref: "searchEngine",
          type: "form",
          element: "form",
          class: [
            {
              label: "row",
              link: "",
              id: "c_12",
              ref: "searchEngine",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ],
      data: []
    }
  ],
  data: []
}

// check clean
export const loader__content = {
  label: "loader",
  link: "",
  id: "loader",
  ref: "loader",
  type: "section",
  element: "",
  class: [],
  icon: "",
  dataParent: false,
  parentId: "",
  parts: [
    {
      label: "",
      link: "",
      id: "lhd_1",
      ref: "loader",
      type: "header",
      element: "header",
      class: [
        {
          label: "hide",
          link: "",
          id: "lhc_1",
          ref: "loader",
          type: "class",
          element: "className",
          icon: "",
          parts: []
        }
      ],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "loader",
          link: "",
          id: "lh_1",
          ref: "loader",
          type: "title",
          element: "h2",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ],
      data: []
    }, {
      label: "loader animation",
      link: "",
      id: "ll_1",
      ref: "loader",
      type: "loader",
      element: "loader",
      class: [],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [],
      data: []
    }, {
      label: "Loader article",
      link: "",
      id: "lartcl_1",
      ref: "loader",
      type: "part",
      element: "article",
      class: [],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "",
          link: "",
          id: "lartclhd_1",
          ref: "loader",
          type: "header",
          element: "header",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [
            {
              label: "When catching your location takes to long, please fill in the place you're looking for.",
              link: "",
              id: "lartclh_2",
              ref: "loader",
              type: "subTitle",
              element: "h3",
              class: [],
              icon: "",
              dataParent: false,
              parentId: "",
              parts: [],
              data: []
            }
          ],
          data: []
        },
        searchEngine__content,
      ],
      data: []
    }
  ],
  data: []
};
// check clean
export const footer__content = {
  label: "footer",
  link: "",
  id: "footer",
  ref: "footer",
  type: "footer",
  element: "",
  class: [],
  icon: "",
  dataParent: false,
  parentId: "",
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
      dataParent: false,
      parentId: "",
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
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }, {
          label: "Frouke Buyse-Assaf",
          link: "https://www.facebook.com/profile.php?id=100011123085509",
          id: "fta_1",
          ref: "footer",
          type: "link",
          element: "a",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }, {
          label: "Github",
          link: "https://github.com/FroukeA/weather__app--react",
          id: "fta_2",
          ref: "footer",
          type: "link",
          element: "a",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ]
    }
  ],
  data: [],
  func: null
};

// check clean
export const hourly__content = {
  label: "hourly",
  link: "",
  id: "hourly",
  ref: "hourly",
  type: "section",
  element: "",
  class: [],
  icon: "",
  dataParent: false,
  parentId: "",
  parts: [
    {
      label: "",
      link: "",
      id: "hhd_1",
      ref: "hourly",
      type: "header",
      element: "header",
      class: [
        {
          label: "hide",
          link: "",
          id: "c_1",
          ref: "hourly",
          type: "class",
          element: "className",
          icon: "",
          parts: [],
          data: []
        }
      ],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "hourly",
          link: "",
          id: "hh_1",
          ref: "hourly",
          type: "title",
          element: "h2",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ],
      data: []
    }, {
      label: "Hourly article",
      link: "",
      id: "hartcl_1",
      ref: "hourly",
      type: "part",
      element: "article",
      class: [],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "",
          link: "",
          id: "hahd_1",
          ref: "hourly",
          type: "header",
          element: "header",
          class: [
            {
              label: "hide",
              link: "",
              id: "c_1",
              ref: "hourly",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [
            {
              label: "hourly article title",
              link: "",
              id: "hh_2",
              ref: "hourly",
              type: "title",
              element: "h3",
              class: [],
              icon: "",
              dataParent: false,
              parentId: "",
              parts: [],
              data: []
            }
          ],
          data: []
        }, {
          label: "weather hourly list",
          link: "",
          id: "hlt_1",
          ref: "hourly",
          type: "list--weather",
          element: "dl",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
          parts: [
            {
              label: "card",
              link: "",
              id: "crd_2",
              ref: "hourly",
              type: "card",
              element: "card",
              class: [],
              icon: "",
              dataParent: false,
              parentId: "",
              parts: [
                {
                  label: "structureChild",
                  link: "",
                  id: "hd_1",
                  ref: "hourly",
                  type: "cardContent",
                  element: "div",
                  class: [],
                  icon: "",
                  dataParent: false,
                  parentId: "",
                  parts: [
                    {
                      label: "Hour",
                      link: "",
                      id: "hdt_1",
                      ref: "hourly",
                      type: "term",
                      element: "dt",
                      class: [
                        {
                          label: "hide",
                          link: "",
                          id: "f_2",
                          ref: "hourly",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "",
                      link: "",
                      id: "hdd_2",
                      ref: "hourly",
                      type: "description_group",
                      element: "dd",
                      class: [],
                      icon: "",
                      dataParent: false,
                      parentId: "",
                      parts: [
                        {
                          label: "Daily article",
                          link: "",
                          id: "hartcl_2",
                          ref: "hourly",
                          type: "part",
                          element: "article",
                          class: [],
                          icon: "",
                          dataParent: true,
                          parentId: "",
                          parts: [
                            {
                              label: "",
                              link: "",
                              id: "hartclhd_1",
                              ref: "hourly",
                              type: "header",
                              element: "header",
                              class: [],
                              icon: "",
                              dataParent: true,
                              parentId: "",
                              parts: [
                                {
                                  label: "Temperature",
                                  link: "temp--hourly",
                                  id: "ws_2",
                                  ref: "hourly",
                                  type: "subTitle",
                                  element: "h3",
                                  class: [],
                                  icon: "",
                                  dataParent: false,
                                  parentId: "hartclhd_1",
                                  parts: [],
                                  data: []
                                },
                              ],
                              data: []
                            }, {
                              label: "weather icon",
                              link: "icon",
                              id: "hp_1",
                              ref: "hourly",
                              type: "text",
                              element: "p",
                              class: [
                                {
                                  label: "01d",
                                  link: "",
                                  id: "c_3",
                                  ref: "hourly",
                                  type: "class",
                                  element: "className",
                                  icon: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              icon: "",
                              dataParent: false,
                              parentId: "hartcl_2",
                              parts: [
                                {
                                  label: "weather type",
                                  link: "",
                                  id: "hs_1",
                                  ref: "hourly",
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
                                  dataParent: false,
                                  parentId: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              data: []
                            }, {
                              label: "Hour",
                              link: "time",
                              id: "hs_2",
                              ref: "hourly",
                              type: "text",
                              element: "p",
                              class: [],
                              icon: "",
                              dataParent: false,
                              parentId: "hartcl_2",
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
          data: "weather_Data_hourly"
        }
      ],
      data: []
    }
  ],
  data: []
}

// check clean
export const forecast__content = {
  label: "forecast",
  link: "",
  id: "forecast",
  ref: "forecast",
  type: "section",
  element: "",
  class: [],
  icon: "",
  dataParent: false,
  parentId: "",
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
      dataParent: false,
      parentId: "",
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
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ],
      data: []
    }, {
      label: "Forecast article",
      link: "",
      id: "fartcl_1",
      ref: "forecast",
      type: "part",
      element: "article",
      class: [],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "",
          link: "",
          id: "fartclhd_1",
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
          dataParent: false,
          parentId: "",
          parts: [
            {
              label: "Forecast article title",
              link: "",
              id: "fartclh_1",
              ref: "forecast",
              type: "title",
              element: "h3",
              class: [],
              icon: "",
              dataParent: false,
              parentId: "",
              parts: [],
              data: []
            }
          ],
          data: []
        }, {
          label: "forcast list",
          link: "",
          id: "flt_1",
          ref: "forecast",
          type: "list--forecast",
          element: "dl",
          class: [],
          icon: "",
          dataParent: false,
          parentId: "",
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
              dataParent: false,
              parentId: "",
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
                  dataParent: false,
                  parentId: "",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "",
                      link: "",
                      id: "fdd_1",
                      ref: "forecast",
                      type: "description_group",
                      element: "dd",
                      class: [],
                      icon: "",
                      dataParent: false,
                      parentId: "",
                      parts: [
                        {
                          label: "Daily article",
                          link: "",
                          id: "fartcl_2",
                          ref: "forecast",
                          type: "part",
                          element: "article",
                          class: [],
                          icon: "",
                          dataParent: true,
                          parentId: "",
                          parts: [
                            {
                              label: "",
                              link: "",
                              id: "fartclhd_2",
                              ref: "forcast",
                              type: "header",
                              element: "header",
                              class: [],
                              icon: "",
                              dataParent: true,
                              parentId: "fartcl_2",
                              parts: [
                                {
                                  label: "",
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
                                  dataParent: false,
                                  parentId: "fartclhd_2",
                                  parts: [],
                                  data: []
                                }
                              ],
                              data: []
                            }, {
                              label: "weather icon",
                              link: "icon",
                              id: "fp_1",
                              ref: "forecast",
                              type: "text",
                              element: "p",
                              class: [
                                {
                                  label: "01d",
                                  link: "",
                                  id: "c_3",
                                  ref: "forecast",
                                  type: "class",
                                  element: "className",
                                  icon: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              icon: "",
                              dataParent: false,
                              parentId: "fartcl_2",
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
                                  dataParent: false,
                                  parentId: "",
                                  parts: [],
                                  data: []
                                }
                              ],
                              data: []
                            }, {
                              label: "Monday",
                              link: "dt",
                              id: "fs_3",
                              ref: "forecast",
                              type: "text",
                              element: "p",
                              class: [],
                              icon: "",
                              dataParent: false,
                              parentId: "fartcl_2",
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

// check clean
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
    dataParent: false,
    parentId: "",
    parts: [
      {
        label: "search",
        link: "",
        id: "f_searchData",
        ref: "dataf_1",
        type: "form_data",
        element: "form_data",
        class: [],
        icon: "",
        dataParent: false,
        parentId: "",
        step: 1,
        position: "end",
        visible: "true",
        parts: [
          {
            label: "search",
            link: "",
            id: "datafi_1",
            ref: "dataf_1",
            type: "search",
            element: "input",
            class: [],
            icon: "",
            dataParent: false,
            parentId: "",
            parts: [],
            data: [],
            function: handleChangeText.bind(this)
          }
        ],
        data: []
      }
    ],
    data: []
  },
];


// breaks here
export const weather__content = {
  label: "weather",
  link: "",
  id: "weather",
  ref: "weather",
  type: "section",
  element: "",
  class: [],
  icon: "",
  dataParent: false,
  parentId: "",
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
      dataParent: false,
      parentId: "",
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
          dataParent: false,
          parentId: "",
          parts: [],
          data: []
        }
      ],
      data: []
    }, {
      label: "Weather article",
      link: "",
      id: "wartcl_1",
      ref: "weather",
      type: "part",
      element: "article",
      class: [
        {
          label: "grid",
          link: "",
          id: "c_19",
          ref: "weather",
          type: "class",
          element: "className",
          icon: "",
          parts: [],
          data: []
        }
      ],
      icon: "",
      dataParent: false,
      parentId: "",
      parts: [
        {
          label: "",
          link: "",
          id: "wartclhd_1",
          ref: "weather",
          type: "header",
          element: "header",
          class: [
            {
              label: "left",
              link: "",
              id: "c_20",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }, {
              label: "location",
              link: "",
              id: "c_21",
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
          parentId: "",
          parts: [
            {
              label: "city name",
              link: "name",
              id: "wh_2",
              ref: "weather",
              type: "title",
              element: "h3",
              class: [
                {
                  label: "location",
                  link: "",
                  id: "c_21",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              dataParent: false,
              parentId: "wartclhd_1",
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
            //       id: "c_22",
            //       ref: "weather",
            //       type: "class",
            //       element: "className",
            //       icon: "",
            //       parts: [],
            //       data: []
            //     }
            //   ],
            //   icon: "",
            //   dataParent: false,
            //   parentId: "",
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
            //   dataParent: false,
            //   parentId: "",
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
            //   dataParent: false,
            //   parentId: "",
            //   parts: [],
            //   data: []
            // }
          ],
          data: []
        }, {
          label: "",
          link: "",
          id: "wd_5",
          ref: "weather",
          type: "div",
          element: "div",
          class: [
            {
              label: "temp",
              link: "",
              id: "c_16",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: false,
          parentId: "",
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
                  id: "c_12",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              dataParent: false,
              parentId: "",
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
                  dataParent: false,
                  parentId: "",
                  parts: [
                    {
                      label: "",
                      link: "",
                      id: "wldd_3",
                      ref: "weather",
                      type: "div",
                      element: "div",
                      class: [],
                      icon: "",
                      dataParent: true,
                      parentId: "",
                      parts: [
                        {
                          label: "Weather icon",
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
                          dataParent: false,
                          parentId: "",
                          parts: [],
                          data: []
                        }, {
                          label: "weather visual",
                          link: "icon",
                          id: "wdd_3",
                          ref: "weather",
                          type: "description",
                          element: "dd",
                          class: [],
                          icon: "",
                          dataParent: false,
                          parentId: "wldd_3",
                          parts: [
                            {
                              label: "weather type",
                              link: "",
                              id: "ws_1",
                              ref: "weather",
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
                              dataParent: false,
                              parentId: "",
                              parts: [],
                              data: []
                            }
                          ],
                          data: []
                        }
                      ],
                      data: []
                    }, {
                      label: "",
                      link: "",
                      id: "wldd_2",
                      ref: "weather",
                      type: "div",
                      element: "div",
                      class: [],
                      icon: "",
                      dataParent: true,
                      parentId: "",
                      parts: [
                        {
                          label: "Temperature",
                          link: "",
                          id: "wdt_3",
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
                          dataParent: false,
                          parentId: "",
                          parts: [],
                          data: []
                        }, {
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
                          dataParent: false,
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
                  dataParent: false,
                  parentId: "",
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
                      dataParent: false,
                      parentId: "",
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
                              id: "c_16",
                              ref: "weather",
                              type: "class",
                              element: "className",
                              icon: "",
                              parts: [],
                              data: []
                            }
                          ],
                          icon: "",
                          dataParent: false,
                          parentId: "",
                          parts: [],
                          data: [],
                          checked: true,
                          function: handleChangeConversion.bind(this, 'celsius')
                        }
                      ]
                    }, {
                      label: "Fahrenheit",
                      link: "",
                      id: "wli_2",
                      ref: "weather",
                      type: "item",
                      element: "li",
                      class: [],
                      icon: "",
                      parts: [
                        {
                          label: "F",
                          link: "",
                          id: "wcbi_4",
                          ref: "weather",
                          type: "customBoxInput",
                          element: "radio",
                          class: [
                            {
                              label: "temp",
                              link: "",
                              id: "c_16",
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
        }, {
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
              id: "c_17",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: false,
          parentId: "",
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
                  id: "c_12",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              dataParent: false,
              parentId: "",
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
                      id: "c_12",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }, {
                      label: "featureItem",
                      link: "",
                      id: "c_2",
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
                  parentId: "",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
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
                      dataParent: false,
                      parentId: "wdd_11",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
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
                      id: "c_12",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }, {
                      label: "featureItem",
                      link: "",
                      id: "c_2",
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
                  parentId: "",
                  parts: [
                    {
                      label: "highest temperature",
                      link: "",
                      id: "wdt_5",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "temp high",
                      link: "temp.high",
                      id: "wdd_5",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "highTemp",
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
                      parentId: "wdd_12",
                      dataParent: false,
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }
              ],
              data: []
            }, {
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
                  id: "c_12",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              dataParent: false,
              parentId: "",
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
                      id: "c_2",
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
                  parentId: "",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "description",
                      link: "description",
                      id: "wdd_6",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [],
                      icon: "",
                      dataParent: false,
                      parentId: "wdd_17",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
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
                      id: "c_2",
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
                  parentId: "",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
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
                      dataParent: false,
                      parentId: "wdd_19",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
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
                      id: "c_2",
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
                    }, {
                      label: "...km/h",
                      link: "wind_speed",
                      id: "wdd_8",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "wind",
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
                      dataParent: false,
                      parentId: "wdd_21",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
                  label: "item",
                  link: "",
                  id: "wdd_23",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_2",
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
                  parentId: "",
                  parts: [
                    {
                      label: "humidity",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "...%",
                      link: "humidity",
                      id: "wdd_9",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "humidity",
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
                      dataParent: false,
                      parentId: "wdd_23",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
                  label: "item",
                  link: "",
                  id: "wdd_25",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_2",
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
                  parentId: "",
                  parts: [
                    {
                      label: "sunrise",
                      link: "",
                      id: "wdt_10",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    },
                    {
                      label: "00:00",
                      link: "sunrise",
                      id: "wdd_10",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "sunrise",
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
                      dataParent: false,
                      parentId: "wdd_25",
                      parts: [],
                      data: []
                    }
                  ],
                  data: []
                }, {
                  label: "item",
                  link: "",
                  id: "wdd_27",
                  ref: "weather",
                  type: "div",
                  element: "div",
                  class: [
                    {
                      label: "featureItem",
                      link: "",
                      id: "c_2",
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
                  parentId: "",
                  parts: [
                    {
                      label: "sunset",
                      link: "",
                      id: "wdt_11",
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
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: []
                    }, {
                      label: "00:00",
                      link: "sunset",
                      id: "wdd_15",
                      ref: "weather",
                      type: "description",
                      element: "dd",
                      class: [
                        {
                          label: "sunset",
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
                      dataParent: false,
                      parentId: "wdd_27",
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
        }, {
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
              id: "c_18",
              ref: "weather",
              type: "class",
              element: "className",
              icon: "",
              parts: [],
              data: []
            }
          ],
          icon: "",
          dataParent: false,
          parentId: "",
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
              parentId: "",
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
                  dataParent: false,
                  parentId: "",
                  parts: [],
                  data: []
                }, {
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
                      id: "c_13",
                      ref: "weather",
                      type: "class",
                      element: "className",
                      icon: "",
                      parts: [],
                      data: []
                    }
                  ],
                  icon: "",
                  dataParent: false,
                  parentId: "wld_1",
                  parts: [],
                  data: []
                }
              ],
              data: []
            }
          ],
          data: []
        }, {
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
          dataParent: false,
          parentId: "",
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
                  id: "c_12",
                  ref: "weather",
                  type: "class",
                  element: "className",
                  icon: "",
                  parts: [],
                  data: []
                }
              ],
              icon: "",
              dataParent: false,
              parentId: "",
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
                  dataParent: false,
                  parentId: "",
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
                          id: "c_15",
                          ref: "weather",
                          type: "class",
                          element: "className",
                          icon: "",
                          parts: [],
                          data: []
                        }
                      ],
                      icon: "",
                      dataParent: false,
                      parentId: "",
                      parts: [],
                      data: [],
                      function: handleGetCurrentLocation.bind(this,)
                    }
                  ],
                  data: []
                }, searchEngine__content,
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