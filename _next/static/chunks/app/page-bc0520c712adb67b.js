(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [974],
  {
    5401: (e, a, n) => {
      Promise.resolve().then(n.bind(n, 1393)),
        Promise.resolve().then(n.bind(n, 2743)),
        Promise.resolve().then(n.bind(n, 5725));
    },
    1393: (e, a, n) => {
      "use strict";
      n.d(a, { default: () => f });
      var s = n(5155);
      n(4144);
      var t = n(9340);
      class r {
        async list() {
          return t.i.get("/currency/list");
        }
        async course(e, a) {
          return t.i.get("/currency/course/exchange-rate", {
            params: { crypto_sale_id: e, crypto_purchase_id: a },
          });
        }
      }
      let l = new r();
      class i {
        async create_order_step_first(e, a) {
          return t.i.post("/order/bulk/steps/create-order/step-1", {
            order: e,
            device: a,
          });
        }
        async create_order_step_second(e, a) {
          return t.i.post("/order/bulk/steps/create-order/step-2", {
            order: e,
            device: a,
          });
        }
        async create_order(e, a) {
          return t.i.post("/order/bulk/create-order", { order: e, device: a });
        }
      }
      let c = new i();
      var o = n(1747),
        d = n(4259);
      let m = async () => {
          let e = await d.Ay.load();
          return (await e.get()).visitorId;
        },
        u = async () => {
          let e = await fetch("https://ipinfo.io/json?token=6eb7e1e1120e59");
          return await e.json();
        },
        h = () => {
          let e = document.createElement("canvas"),
            a = e.getContext("webgl") || e.getContext("experimental-webgl");
          if (!a || !(a instanceof WebGLRenderingContext)) return "Unknown";
          let n = a.getExtension("WEBGL_debug_renderer_info");
          return n ? a.getParameter(n.UNMASKED_RENDERER_WEBGL) : "Unknown";
        },
        p = () => {
          let e = navigator.userAgent.toLowerCase();
          return /mobile|android|iphone|ipad/.test(e) ? "mobile" : "desktop";
        },
        v = async () => {
          let e = await u();
          return {
            ip_address: e.ip,
            city: e.city,
            region: e.region,
            country: e.country,
            fingerprint: await m(),
            gpu: h(),
            user_agent: navigator.userAgent,
            device_type: p(),
          };
        };
      var x = n(8629),
        g = n(4403),
        N = n(6046),
        j = n(2115);
      let f = () => {
        let { account: e } = (0, o.E)(),
          [a, n] = (0, j.useState)(""),
          [t, r] = (0, j.useState)(!1),
          [i, d] = (0, j.useState)(!1),
          [m, u] = (0, j.useState)(!1),
          [h, p] = (0, j.useState)(),
          [f, _] = (0, j.useState)(),
          [b, y] = (0, j.useState)(0),
          [w, k] = (0, j.useState)(""),
          [C, E] = (0, j.useState)(""),
          [S, L] = (0, j.useState)(""),
          [G, A] = (0, j.useState)(""),
          [P, R] = (0, j.useState)(e.email),
          [M, I] = (0, j.useState)(""),
          [U, F] = (0, j.useState)(""),
          [T, O] = (0, j.useState)(!1),
          [q, X] = (0, j.useState)({}),
          B = (0, N.useRouter)();
        (0, j.useEffect)(() => {
          e.email && R(e.email);
        }, [e]);
        let {
            data: K = [],
            isLoading: D,
            isError: W,
          } = (0, x.I)({
            queryKey: ["criptaList"],
            queryFn: async () => {
              let e = (await l.list()).data.sort((e, a) =>
                  "crypto" === e.type && "crypto" !== a.type
                    ? -1
                    : "crypto" !== e.type && "crypto" === a.type
                    ? 1
                    : e.name.localeCompare(a.min_receive.toString())
                ),
                a = e[0],
                n = e[1];
              return p(a), _(n), e;
            },
            placeholderData: g.rX,
          }),
          Y = () => {
            p(f), _(h);
          };
        (0, j.useEffect)(() => {
          (async () => {
            h && f && y((await l.course(h.id, f.id)).data);
          })();
        }, [h, f]);
        let z = () => {
          let e = {};
          (!w || isNaN(Number(w)) || 0 >= Number(w)) &&
            (e.amountGive = "Введите корректную сумму для отправки."),
            h &&
              Number(w) < h.min_receive &&
              (e.amountGiveSum = "Введите корректную сумму для отправки."),
            (!C || isNaN(Number(C)) || 0 >= Number(C)) &&
              (e.amountGet = "Введите корректную сумму для получения."),
            S.trim() || (e.address = "Введите корректные данные");
          let a = f && new RegExp(f.regex);
          return (
            console.log(a),
            a &&
              f &&
              "cash" != f.type &&
              !a.test(S.trim()) &&
              (e.address = "Введите корректный адрес"),
            (P.trim() && /\S+@\S+\.\S+/.test(P)) ||
              (e.email = "Некорректный email"),
            !U.trim() && f && "cash" == f.type && (e.fio = "Введите ФИО."),
            T || (e.agreed = "Необходимо согласиться с условиями."),
            (() => { let d = M.replace(/\D/g, ""); return M.trim() && d.length >= 10 && !["1","39","38","49","44","65","81","82","972","971"].some(p => d.startsWith(p)); })() ||
            (e.phone = "Некорректный номер телефона"),
          X(e),
            console.log(Object.keys(e).length),
            console.log(e),
            0 === Object.keys(e).length
          );
        };
        (0, j.useEffect)(() => {
          let e = (e) => {
            e.target.closest(
              ".land_exchange_main_hidden_menu_wrapper__input"
            ) || (d(!1), r(!1), n(""));
          };
          return (
            document.addEventListener("click", e),
            () => {
              document.removeEventListener("click", e);
            }
          );
        }, [t, i]);
        let Z = async () => {
            if (!h || !f || !z()) return;
            let e = {
                crypto_sale_id: h.id,
                crypto_purchase_id: f.id,
                email: P,
                phone: M,
                wallet: S,
                memo: G,
                amount_sale: Number(w),
                amount_purchase: Number(C),
                exchange_rate: b,
              },
              a = await v();
            try {
              let n = (await c.create_order(e, a)).data;
              B.push("/order/" + n.result);
            } catch (a) {
              let e = {};
              (e.address = "Адрес указан некорректно"), X(e);
            }
          },
          [$, H] = (0, j.useState)(null);
        (0, j.useEffect)(() => {
          "give" === $ && w && b && E((parseFloat(w) * b).toFixed(6));
        }, [w, b, $]),
          (0, j.useEffect)(() => {
            "get" === $ && C && b && k((parseFloat(C) / b).toFixed(6));
          }, [C, b, $]);
        let J = K.filter(
          (e) =>
            e.name.toLowerCase().includes(a.toLowerCase()) ||
            e.currency.toLowerCase().includes(a.toLowerCase())
        );
        return (0, s.jsx)("div", {
          className: "page-content-container main-page-content",
          children: (0, s.jsxs)("div", {
            className: "page-content-wrapper",
            children: [
              (0, s.jsx)("h1", {
                className: "change_h1",
                children: "Обмен цифровых валют",
              }),
              (0, s.jsx)("div", {
                id: "CreateTicketForm",
                children: (0, s.jsxs)("div", {
                  className: "content-panel form-container",
                  children: [
                    (0, s.jsx)("span", {
                      className: "form-section-name",
                      children: "Валюта обмена",
                    }),
                    (0, s.jsxs)("div", {
                      id: "exchangeFormGroupGive",
                      className:
                        "form-row exchange-form-group exchange-form-group-give",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "exchange-channel-controls",
                          children: [
                            (0, s.jsxs)("div", {
                              className: "input-amount-wrapper",
                              children: [
                                (0, s.jsxs)("label", {
                                  id: q.amountGive && "error",
                                  children: ["Вы отправляете", " "],
                                }),
                                (0, s.jsx)("input", {
                                  className: "form-control numeric-hide-arrows",
                                  type: "number",
                                  placeholder: "Введите сумму",
                                  value: w,
                                  onChange: (e) => {
                                    H("give"), k(e.target.value);
                                  },
                                }),
                                (0, s.jsx)("div", {
                                  className: "exchange-input-info",
                                  children: (0, s.jsx)("span", {
                                    className: "input-amount-ticker",
                                    children: null == h ? void 0 : h.currency,
                                  }),
                                }),
                                (0, s.jsxs)("span", {
                                  className: "exchange-form-limitations",
                                  id: q.amountGiveSum && "error",
                                  children: [
                                    "Минимум:",
                                    " ",
                                    (0, s.jsxs)("span", {
                                      className: "minSumExchange",
                                      children: [
                                        null == h ? void 0 : h.min_receive.toFixed(8),
                                        " ",
                                        null == h ? void 0 : h.currency,
                                      ],
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            (0, s.jsx)("div", {
                              className: "form-control custom-dropdown",
                              onClick: () => {
                                i || r(!0);
                              },
                              children: (0, s.jsx)("div", {
                                className: "custom-dropdown-selected-option",
                                children: (0, s.jsxs)("div", {
                                  className: "flex-center",
                                  children: [
                                    (0, s.jsx)("img", {
                                      className: "channel-icon",
                                      alt: "",
                                      src: "/crypto/icons/".concat(
                                        null == h ? void 0 : h.image
                                      ),
                                    }),
                                    (0, s.jsx)("div", {
                                      className: "name-ticker",
                                      children: null == h ? void 0 : h.name,
                                    }),
                                  ],
                                }),
                              }),
                            }),
                            (0, s.jsx)("div", {
                              className: "land_exchange_main_hidden_menu",
                              style: { display: t ? "block" : "none" },
                              children: (0, s.jsxs)("div", {
                                className:
                                  "land_exchange_main_hidden_menu_wrapper",
                                id: "menuFrom",
                                children: [
                                  (0, s.jsx)("input", {
                                    type: "text",
                                    placeholder: "Найти...",
                                    className:
                                      "land_exchange_main_hidden_menu_wrapper__input",
                                    id: "from_sum",
                                    value: a,
                                    onChange: (e) => n(e.target.value),
                                  }),
                                  J.filter((e) => !0 === e.status_give).map(
                                    (e) =>
                                      (0, s.jsxs)(
                                        "div",
                                        {
                                          className: "crypt_item",
                                          onClick: () => {
                                            p(e), r(!1), n("");
                                          },
                                          children: [
                                            (0, s.jsx)("img", {
                                              src: "/crypto/icons/".concat(
                                                null == e ? void 0 : e.image
                                              ),
                                              alt: null == e ? void 0 : e.name,
                                            }),
                                            (0, s.jsx)("p", {
                                              children:
                                                null == e ? void 0 : e.name,
                                            }),
                                          ],
                                        },
                                        e.id
                                      )
                                  ),
                                ],
                              }),
                            }),
                          ],
                        }),
                        (0, s.jsx)("button", {
                          type: "button",
                          className: "swap-currencies-button",
                          title: "Swap currencies",
                          onClick: () => Y(),
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      id: "exchangeFormGroupReceive",
                      className:
                        "form-row exchange-form-group exchange-form-group-receive",
                      children: (0, s.jsxs)("div", {
                        className: "exchange-channel-controls",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "form-row-item input-amount-wrapper",
                            children: [
                              (0, s.jsx)("label", {
                                id: q.amountGet && "error",
                                children: "Вы получаете ",
                              }),
                              (0, s.jsx)("input", {
                                className: "form-control numeric-hide-arrows",
                                type: "number",
                                placeholder: "Введите сумму",
                                value: C,
                                onChange: (e) => {
                                  H("get"), E(e.target.value);
                                },
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "exchange-input-info exchange-input-info2",
                                children: (0, s.jsx)("span", {
                                  className: "input-amount-ticker",
                                  children: null == f ? void 0 : f.currency,
                                }),
                              }),
                            ],
                          }),
                          (0, s.jsx)("div", {
                            className: "form-control custom-dropdown",
                            onClick: () => {
                              t || d(!0);
                            },
                            children: (0, s.jsx)("div", {
                              className: "custom-dropdown-selected-option",
                              children: (0, s.jsxs)("div", {
                                className: "flex-center",
                                children: [
                                  (0, s.jsx)("img", {
                                    className: "channel-icon",
                                    src: "/crypto/icons/".concat(
                                      null == f ? void 0 : f.image
                                    ),
                                    alt: "",
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "name-ticker",
                                    children: null == f ? void 0 : f.name,
                                  }),
                                ],
                              }),
                            }),
                          }),
                          (0, s.jsx)("div", {
                            className: "land_exchange_main_hidden_menu",
                            style: { display: i ? "block" : "none" },
                            children: (0, s.jsxs)("div", {
                              className:
                                "land_exchange_main_hidden_menu_wrapper",
                              id: "menuFrom",
                              children: [
                                (0, s.jsx)("input", {
                                  type: "text",
                                  placeholder: "Найти...",
                                  className:
                                    "land_exchange_main_hidden_menu_wrapper__input",
                                  id: "from_sum",
                                  value: a,
                                  onChange: (e) => n(e.target.value),
                                }),
                                J.filter((e) => !0 === e.status_take).map((e) =>
                                  (0, s.jsxs)(
                                    "div",
                                    {
                                      className: "crypt_item",
                                      onClick: () => {
                                        _(e), d(!1), n("");
                                      },
                                      children: [
                                        (0, s.jsx)("img", {
                                          src: "/crypto/icons/".concat(
                                            null == e ? void 0 : e.image
                                          ),
                                          alt: null == e ? void 0 : e.name,
                                        }),
                                        (0, s.jsx)("p", {
                                          children: null == e ? void 0 : e.name,
                                        }),
                                      ],
                                    },
                                    e.id
                                  )
                                ),
                              ],
                            }),
                          }),
                        ],
                      }),
                    }),
                    !m &&
                      (0, s.jsx)("div", {
                        className:
                          "buttons-container buttons-container-accept-decline",
                        children: (0, s.jsx)("button", {
                          className:
                            "button button-primary button-accept landing_exchange_email_button",
                          type: "submit",
                          onClick: () => u(!0),
                          children: "Начать обмен",
                        }),
                      }),
                    m &&
                      (0, s.jsx)("div", {
                        id: "exchangeFormRequisitesPart",
                        children: (0, s.jsx)("div", {
                          className: "page-content-container fill-order-data",
                          children: (0, s.jsxs)("div", {
                            className: "page-content-wrapper",
                            children: [
                              (0, s.jsx)("span", {
                                className: "form-section-name send-to",
                                children: "Куда отправляете",
                              }),
                              (0, s.jsxs)("div", {
                                className: "form-row ".concat(
                                  f &&
                                    "cash" == f.type &&
                                    "form-row-two-columns"
                                ),
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "form-row-item ",
                                    children: [
                                      (0, s.jsx)("label", {
                                        id: q.address && "error",
                                        children: q.address
                                          ? q.address
                                          : f && "cash" == f.type
                                          ? "Номер карты"
                                          : "Адрес получения",
                                      }),
                                      (0, s.jsx)("input", {
                                        className: "form-control",
                                        "data-val": "true",
                                        "data-val-required":
                                          "The MainGet field is required.",
                                        id: "receiving_address",
                                        placeholder:
                                          f && "cash" == f.type
                                            ? "Введите номер карты"
                                            : "Введите адрес получения",
                                        type: "text",
                                        value: S,
                                        onChange: (e) => L(e.target.value),
                                      }),
                                      (0, s.jsx)("span", {
                                        className:
                                          "error-text field-validation-valid",
                                        "data-valmsg-for": "Input.MainGet",
                                        "data-valmsg-replace": "true",
                                      }),
                                    ],
                                  }),
                                  f &&
                                    "crypto" == f.type &&
                                    [
                                      "TON",
                                      "USDTTON",
                                      "XRP",
                                      "NOT",
                                      "EOS",
                                      "XLM",
                                    ].includes(f.currency) &&
                                    (0, s.jsxs)("div", {
                                      className: "form-row-item ",
                                      style: { marginTop: "20px" },
                                      children: [
                                        (0, s.jsx)("label", {
                                          children: "Тег назначения (MEMO)",
                                        }),
                                        (0, s.jsx)("input", {
                                          className: "form-control",
                                          "data-val": "true",
                                          "data-val-required":
                                            "The MainGet field is required.",
                                          id: "receiving_address",
                                          placeholder:
                                            "Введите тег назначения (MEMO)",
                                          type: "text",
                                          value: G,
                                          onChange: (e) => A(e.target.value),
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "error-text field-validation-valid",
                                          "data-valmsg-for": "Input.MainGet",
                                          "data-valmsg-replace": "true",
                                        }),
                                      ],
                                    }),
                                  f &&
                                    "cash" == f.type &&
                                    (0, s.jsxs)("div", {
                                      className: "form-row-item",
                                      children: [
                                        (0, s.jsx)("label", {
                                          id: q.fio && "error",
                                          children: "ФИО",
                                        }),
                                        (0, s.jsx)("input", {
                                          className: "form-control",
                                          "data-val": "true",
                                          name: "Input.AddGive",
                                          placeholder: "Введите фио",
                                          type: "text",
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "error-text field-validation-valid",
                                          "data-valmsg-for": "Input.AddGive",
                                          "data-valmsg-replace": "true",
                                        }),
                                      ],
                                    }),
                                ],
                              }),
                              (0, s.jsx)("span", {
                                className: "form-section-name additional-info",
                                children: "Дополнительная информация",
                              }),
                              (0, s.jsxs)("div", {
                                className: "form-row form-row-two-columns",
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "form-row-item",
                                    children: [
                                      (0, s.jsx)("label", {
                                        id: q.email && "error",
                                        children: q.email ? q.email : "Email",
                                      }),
                                      (0, s.jsx)("input", {
                                        className: "form-control",
                                        "data-val": "true",
                                        "data-val-required":
                                          "The Email field is required.",
                                        id: "email",
                                        placeholder: "Введите ваш Email",
                                        type: "email",
                                        value: P,
                                        onChange: (e) => R(e.target.value),
                                      }),
                                    ],
                                  }),
                                  (0, s.jsxs)("div", {
                                    className: "form-row-item",
                                    children: [
                                      (0, s.jsx)("label", {
                                        id: q.phone && "error",
                                        children: q.phone
                                          ? q.phone
                                          : "Номер телефона",
                                      }),
                                      (0, s.jsx)("input", {
                                        className: "form-control",
                                        placeholder: "Введите ваш телефон",
                                        type: "text",
                                        value: M,
                                        onChange: (e) => I(e.target.value),
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              (0, s.jsx)("div", {
                                className: "form-row",
                                children: (0, s.jsx)("div", {
                                  className: "form-row-item",
                                  children: (0, s.jsx)("label", {
                                    className: "additional-info",
                                    children:
                                      "Пожалуйста, обратите внимание, что для успешного обмена вам необходимо предоставлять адрес исключительно в нужной сети. Просим Вас убедиться в соответствии сети получаемой валюты, что бы избежать потерю средств.",
                                  }),
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className: "form-row checkbox-row",
                                children: (0, s.jsxs)("div", {
                                  className: "custom-checkbox ".concat(
                                    q.agreed && "error"
                                  ),
                                  id: "agreeRulesCheckbox",
                                  onClick: () => O(!T),
                                  children: [
                                    (0, s.jsx)("input", {
                                      type: "checkbox",
                                      name: "",
                                      id: "",
                                      checked: T,
                                      onChange: () => O(!T),
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "custom-checkbox-label",
                                      children: [
                                        "Согласен(-а) с ",
                                        (0, s.jsx)("a", {
                                          href: "/rules",
                                          children: "правилами обмена ",
                                        }),
                                        " ",
                                        "и",
                                        (0, s.jsx)("a", {
                                          href: "/aml/kyc",
                                          children: " AML/KYC policy",
                                        }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, s.jsx)("div", {
                                className:
                                  "buttons-container buttons-container-accept-decline",
                                children: (0, s.jsx)("button", {
                                  className:
                                    "button button-primary button-accept landing_exchange_email_button",
                                  type: "submit",
                                  onClick: () => Z(),
                                  children: "Создать заявку",
                                }),
                              }),
                            ],
                          }),
                        }),
                      }),
                  ],
                }),
              }),
            ],
          }),
        });
      };
    },
    2743: (e, a, n) => {
      "use strict";
      n.d(a, { default: () => l });
      var s = n(5155);
      n(2115);
      var t = n(6046);
      let r = [
          { name: "Обмен", href: "/" },
          { name: "О нас", href: "/about" },
          { name: "Правила", href: "/rules" },
          { name: "Партнёрская программа", href: "/referral" },
          { name: "AML/KYC", href: "/aml/kyc" },
        ],
        l = () => {
          let e = (0, t.usePathname)();
          return (0, s.jsxs)("footer", {
            children: [
              (0, s.jsxs)("nav", {
                className: "nav-panel nav-panel-bottom",
                children: [
                  (0, s.jsxs)("div", {
                    className: "nav-panel-logo-container",
                    children: [
                      (0, s.jsx)("div", { className: "nav-panel-logo" }),
                      (0, s.jsx)("span", {
                        className: "nav-panel-logo-text",
                        children:
                          "Полуавтоматический сервис по обмену цифровых валют",
                      }),
                    ],
                  }),
                  (0, s.jsx)("div", {
                    children: (0, s.jsx)("ul", {
                      className: "nav-panel-main-menu",
                      children: r.map((a) =>
                        (0, s.jsx)(
                          "li",
                          {
                            className: "nav-panel-item",
                            children: (0, s.jsx)("a", {
                              className: "nav-panel-link ".concat(
                                e === a.href ? "active" : ""
                              ),
                              href: a.href,
                              children: a.name,
                            }),
                          },
                          a.href
                        )
                      ),
                    }),
                  }),
                  (0, s.jsx)("div", {
                    className: "nav-panel-schedule",
                    children: (0, s.jsxs)("div", {
                      className: "timer-container",
                      children: [
                        (0, s.jsx)("div", { className: "timer-image" }),
                        (0, s.jsx)("span", {
                          className: "timer-text",
                          children: "c 10:00 до 22:00(МСК)",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, s.jsx)("div", {
                className: "copyrights",
                children:
                  "\xa9 2025 Swapium. Копирование материалов только с разрешения правообладателя.",
              }),
            ],
          });
        };
    },
    5725: (e, a, n) => {
      "use strict";
      n.d(a, { default: () => i });
      var s = n(5155),
        t = n(2115),
        r = n(6046);
      let l = [
          { name: "Обмен", href: "/" },
          { name: "О нас", href: "/about" },
          { name: "Правила", href: "/rules" },
          { name: "Партнёрская программа", href: "/referral" },
          { name: "Контакты", href: "/contacts" },
          { name: "AML/KYC", href: "/aml/kyc" },
        ],
        i = () => {
          let e = (0, r.usePathname)(),
            [a, n] = (0, t.useState)(!1);
          return (0, s.jsxs)(s.Fragment, {
            children: [
              (0, s.jsx)("nav", {
                className: "nav-panel nav-panel-top",
                children: (0, s.jsxs)("div", {
                  className: "nav-panel-wrapper nav-panel-desktop",
                  children: [
                    (0, s.jsxs)("div", {
                      className: "nav-panel-left",
                      children: [
                        (0, s.jsx)("a", {
                          className: "nav-panel-logo",
                          href: "/",
                          children: (0, s.jsx)("img", {
                            src: "/logo.svg",
                            alt: "",
                            style: { width: "100%" },
                          }),
                        }),
                        (0, s.jsx)("ul", {
                          className: "nav-panel-main-menu",
                          children: l.map((a) =>
                            (0, s.jsx)(
                              "li",
                              {
                                className: "nav-panel-item",
                                children: (0, s.jsx)("a", {
                                  className: "nav-panel-link ".concat(
                                    e === a.href ? "active" : ""
                                  ),
                                  href: a.href,
                                  children: a.name,
                                }),
                              },
                              a.href
                            )
                          ),
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "nav-panel-right",
                      children: [
                        (0, s.jsx)("a", {
                          className:
                            "nav-panel-link register-nav-link button button-primary",
                          href: "https://t.me/swapium_io",
                          children: "Поддержка",
                        }),
                        (0, s.jsx)("button", {
                          "data-bs-toggle": "modal",
                          id: "#mobileNavigationModal",
                          "data-bs-target": "#mobileNavigationModal",
                          className: "nav-panel-toggler",
                          type: "button",
                          onClick: () => n(!a),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, s.jsx)("div", {
                className: "modal mobile-navigation-modal ".concat(
                  a ? "show" : ""
                ),
                id: "mobileNavigationModal",
                "aria-hidden": !a,
                children: (0, s.jsx)("div", {
                  className: "modal-dialog modal-fullscreen",
                  children: (0, s.jsx)("div", {
                    className: "modal-content",
                    children: (0, s.jsxs)("div", {
                      className: "modal-body",
                      children: [
                        (0, s.jsxs)("div", {
                          className: "nav-panel-mobile-top-block",
                          children: [
                            (0, s.jsx)("div", { className: "nav-panel-logo" }),
                            (0, s.jsx)("button", {
                              type: "button",
                              className:
                                "nav-panel-mobile-close modal-close-button",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Закрыть",
                              onClick: () => n(!a),
                            }),
                          ],
                        }),
                        (0, s.jsx)("ul", {
                          className: "nav-panel-main-menu",
                          children: l.map((a) =>
                            (0, s.jsx)(
                              "li",
                              {
                                className: "nav-panel-item",
                                children: (0, s.jsx)("a", {
                                  className: "nav-panel-link ".concat(
                                    e === a.href ? "active" : ""
                                  ),
                                  href: a.href,
                                  children: a.name,
                                }),
                              },
                              a.href
                            )
                          ),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        };
    },
    9340: (e, a, n) => {
      "use strict";
      n.d(a, { i: () => i });
      var s = n(3576),
        t = n(3415),
        r = n(2818);
      let l = (0, s.w)({
          server: { API_URL: t.z.string().url() },
          client: { NEXT_PUBLIC_API_URL: t.z.string().url() },
          runtimeEnv: {
            API_URL: r.env.API_URL,
            NEXT_PUBLIC_API_URL: window.location.origin + "/exchange",
          },
        }),
        i = n(2651).A.create({
          withCredentials: !0,
          baseURL: l.NEXT_PUBLIC_API_URL,
        });
    },
    1747: (e, a, n) => {
      "use strict";
      n.d(a, { E: () => r });
      var s = n(9827),
        t = n(709);
      let r = (0, s.v)(
        (0, t.Zr)(
          (e) => ({
            account: { email: "", referral_id: "" },
            setAccount: (a) => e({ account: a }),
          }),
          { name: "account" }
        )
      );
    },
    4144: () => {},
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [185, 967, 527, 629, 597, 441, 517, 358], () => a(5401)),
      (_N_E = e.O());
  },
]);
