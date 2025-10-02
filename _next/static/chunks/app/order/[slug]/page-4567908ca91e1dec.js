(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [939],
  {
    3424: (e, a, s) => {
      Promise.resolve().then(s.bind(s, 3273)),
        Promise.resolve().then(s.bind(s, 2743)),
        Promise.resolve().then(s.bind(s, 5725));
    },
    3273: (e, a, s) => {
      "use strict";
      s.d(a, { default: () => p });
      var l = s(5155),
        n = s(8629),
        i = s(4403),
        c = s(2115),
        t = s(2885),
        r = s(1169),
        m = s(1805),
        d = s(9931),
        o = s(9340);
      class h {
        async order(e) {
          return o.i.get("/order/".concat(e));
        }
        async deposit(e) {
          return o.i.get("/order/bulk/deposit/".concat(e));
        }
      }
      let v = new h(),
        x = (e) => {
          let { slug: a } = e,
            [s, o] = (0, c.useState)(1),
            [h, x] = (0, c.useState)(3600),
            {
              data: p,
              isLoading: j,
              isError: N,
            } = (0, n.I)({
              queryKey: ["orderData"],
              queryFn: async () => {
                let e = (await v.order(a)).data;
                return "waiting" != e.status ? o(2) : console.log("sss"), e;
              },
              placeholderData: i.rX,
              refetchInterval: 1e4,
            });
          (0, c.useEffect)(() => {
            if (p && p.created_at) {
              let e = (0, d.L_)(
                p.created_at,
                Intl.DateTimeFormat().resolvedOptions().timeZone
              );
              x(
                Math.max(
                  Math.floor(((0, m.L)(e, 1).getTime() - Date.now()) / 1e3),
                  0
                )
              );
            }
          }, [p]),
            (0, c.useEffect)(() => {
              if (0 === h) return;
              let e = setInterval(() => {
                x((e) => Math.max(e - 1, 0));
              }, 1e3);
              return () => clearInterval(e);
            }, [h]),
            (0, c.useEffect)(() => {}, [p]);
          let u = Math.floor(h / 60),
            _ = h % 60,
            f = ""
              .concat(String(u).padStart(2, "0"), ":")
              .concat(String(_).padStart(2, "0")),
            [y, b] = (0, c.useState)(!1),
            g = (e) => {
              navigator.clipboard.writeText(e),
                b(!0),
                setTimeout(() => b(!1), 3e3);
            };
          return j
            ? (0, l.jsx)("div", { children: "Загрузка данных заказа..." })
            : N || !p
            ? (0, l.jsx)("div", {
                children: "Ошибка при загрузке данных заказа.",
              })
            : (0, l.jsxs)(l.Fragment, {
                children: [
                  1 == s &&
                    (0, l.jsxs)("div", {
                      id: "step-1",
                      children: [
                        (0, l.jsx)("div", {
                          className: "land_exchange_up_items",
                          children: "Обмен цифровых валют",
                        }),
                        (0, l.jsx)("div", {
                          className: "land_exchange_main",
                          children: (0, l.jsxs)("div", {
                            className: "land_exchange_main_box",
                            children: [
                              (0, l.jsxs)("span", {
                                className: "payment_form-title",
                                children: [
                                  "Ваша заявка №",
                                  p.number_slug ? p.number_slug : a,
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "order-timer-container",
                                children: [
                                  (0, l.jsx)("span", {
                                    className: "order-timer-warning",
                                    children: "Время на оплату",
                                  }),
                                  (0, l.jsx)("span", {
                                    className: "order-timer-count",
                                    children: f,
                                  }),
                                ],
                              }),
                              (0, l.jsx)("span", {
                                className: "payment_form-name send-up",
                                children: "Отправка",
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsxs)("div", {
                                  className: "payment_form-block",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Сумма к оплате",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "description",
                                          children: [
                                            p.amount_sale,
                                            " (",
                                            p.crypto_sale.currency,
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Адрес для оплаты",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "description",
                                          children: [
                                            (0, l.jsx)("div", {
                                              className: "",
                                              children: p.wallet_payment,
                                            }),
                                            (0, l.jsx)("div", {
                                              className: "copy-icon",
                                              onClick: () =>
                                                g(p.wallet_payment),
                                              children: y
                                                ? (0, l.jsx)(r.L7X, {})
                                                : (0, l.jsx)(t.WXx, {}),
                                            }),
                                          ],
                                        }),
                                        p.memo_payment &&
                                          (0, l.jsxs)("div", {
                                            className:
                                              "payment_form-block-item",
                                            children: [
                                              (0, l.jsx)("div", {
                                                className: "title",
                                                children:
                                                  "Тег назначения (MEMO)",
                                              }),
                                              (0, l.jsxs)("div", {
                                                className: "description",
                                                children: [
                                                  (0, l.jsx)("div", {
                                                    className: "",
                                                    children: p.memo_payment,
                                                  }),
                                                  (0, l.jsx)("div", {
                                                    className: "copy-icon",
                                                    onClick: () =>
                                                      g(
                                                        p.memo_payment
                                                          ? p.memo_payment
                                                          : ""
                                                      ),
                                                    children: y
                                                      ? (0, l.jsx)(r.L7X, {})
                                                      : (0, l.jsx)(t.WXx, {}),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("span", {
                                className: "payment_form-name send-to",
                                children: "Получение",
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsxs)("div", {
                                  className: "payment_form-block",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Сумма к получению",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "description",
                                          children: [
                                            p.amount_purchase,
                                            " (",
                                            p.crypto_purchase.currency,
                                            ")",
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Адрес для получения",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "description",
                                          children: p.wallet,
                                        }),
                                      ],
                                    }),
                                    p.memo &&
                                      (0, l.jsxs)("div", {
                                        className: "payment_form-block-item",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "title",
                                            children: "Тег назначения (MEMO)",
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "description",
                                            children: p.memo,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsx)("div", {
                                  className: "payment_form-block",
                                  children: (0, l.jsx)("div", {
                                    className: "",
                                    children:
                                      "Мы не принимаем монеты, отправленные с бирж Rapira и Capitalist. Средства с этих платформ будут временно заблокированы, а поставщик ликвидности потребует пройти процедуру KYC.",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsx)("div", {
                                  className: "payment_form-block",
                                  children: (0, l.jsx)("div", {
                                    className: "",
                                    children:
                                      "Уважаемый клиент! Сообщаем Вам, что для успешного обмена нужно дождаться нужного количества подтверждений сети. Во избежание потери средств просим Вас отправлять средства исключительно в нужной сети. После отправки средств по нашим реквизитам транзакция будет проверена на источники происхождения средств посредством AML-проверки. Только после успешного прохождения AML-проверки начнется отсчет времени проведения транзакции. При создании заявки курс по данному направлению не фиксирован и будет зафиксирован после получения необходимых подтверждений. Курс в заявке рассчитывается на основе среднего ордера на биржах (Binance/Bybit/Kucoin/Whitebit).",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsx)("div", {
                                  className: "payment_form-block",
                                  children: (0, l.jsx)("div", {
                                    className: "",
                                    children:
                                      "Уважаемые клиенты! Пожалуйста, убедитесь, что получаемая вами валюта соответствует указанной вами сети, чтобы избежать потери средств.",
                                  }),
                                }),
                              }),
                              (0, l.jsx)("div", {
                                className: "buttons-container-accept-decline",
                                children: (0, l.jsx)("button", {
                                  style: { width: "100%" },
                                  className:
                                    "button button-primary button-accept landing_exchange_email_button",
                                  onClick: async () => {
                                    try {
                                      await v.deposit(a);
                                    } catch (e) {
                                      console.log(e);
                                    }
                                    o(2);
                                  },
                                  children: "Подтвердить платеж",
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                  2 == s &&
                    (0, l.jsxs)("div", {
                      id: "step-2",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "land_exchange_up_items",
                          children: [
                            "Ваша заявка №",
                            p.number_slug ? p.number_slug : a,
                          ],
                        }),
                        (0, l.jsx)("div", {
                          className: "land_exchange_main",
                          children: (0, l.jsxs)("div", {
                            className: "land_exchange_main_box",
                            children: [
                              (0, l.jsxs)("div", {
                                id: "ticketStatus",
                                className: "status-succecc",
                                children: [
                                  (0, l.jsx)("div", {
                                    className: "order-result",
                                    children: (0, l.jsx)("span", {
                                      className: "order-result-text",
                                      children:
                                        "success" == p.status
                                          ? "Заявка выполненна"
                                          : "paid" == p.status
                                          ? "Заявка оплачена"
                                          : "stoped" == p.status
                                          ? "Заявка приостановлена"
                                          : "rejected_time" == p.status
                                          ? "Заявка закрыта по истечению времени."
                                          : "Заявка в обработке",
                                    }),
                                  }),
                                  (0, l.jsx)("span", {
                                    className:
                                      "form-section-name order-result-description",
                                    children:
                                      "success" == p.status
                                        ? "Спасибо что воспользовались нашим сервисом."
                                        : "paid" == p.status
                                        ? "Оператор приступил к обработке заявки"
                                        : "stoped" == p.status
                                        ? "Для продолжения процедуры обмена вам необходимо предоставить дополнительную информацию нашей службе поддержки."
                                        : "rejected_time" == p.status
                                        ? "Заявка автоматически закрыта из-за истечения времени."
                                        : "Мы проверяем данные в заявке и обрабатываем её.",
                                  }),
                                  (0, l.jsx)("a", {
                                    href: "https://t.me/swapium_io",
                                    className:
                                      "form-section-name order-result-description",
                                    style: { textDecoration: "underline" },
                                    children: "Телеграм поддержка",
                                  }),
                                ],
                              }),
                              (0, l.jsx)("div", {
                                className: "payment_form",
                                children: (0, l.jsxs)("div", {
                                  className: "payment_form-block",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Направление обмена",
                                        }),
                                        (0, l.jsxs)("div", {
                                          className: "description",
                                          children: [
                                            p.crypto_sale.currency,
                                            " -",
                                            " ",
                                            p.crypto_purchase.currency,
                                          ],
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Сумма к оплате",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "description",
                                          children: p.amount_sale,
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Адрес для оплаты",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "description",
                                          children: p.wallet_payment,
                                        }),
                                      ],
                                    }),
                                    p.memo_payment &&
                                      (0, l.jsxs)("div", {
                                        className: "payment_form-block-item",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "title",
                                            children: "Тег назначения (MEMO)",
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "description",
                                            children: p.memo_payment,
                                          }),
                                        ],
                                      }),
                                    (0, l.jsx)("hr", {}),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Сумма к получению",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "description",
                                          children: p.amount_purchase,
                                        }),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "payment_form-block-item",
                                      children: [
                                        (0, l.jsx)("div", {
                                          className: "title",
                                          children: "Адрес для получения",
                                        }),
                                        (0, l.jsx)("div", {
                                          className: "description",
                                          children: p.wallet,
                                        }),
                                      ],
                                    }),
                                    p.memo &&
                                      (0, l.jsxs)("div", {
                                        className: "payment_form-block-item",
                                        children: [
                                          (0, l.jsx)("div", {
                                            className: "title",
                                            children: "Тег назначения (MEMO)",
                                          }),
                                          (0, l.jsx)("div", {
                                            className: "description",
                                            children: p.memo,
                                          }),
                                        ],
                                      }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                ],
              });
        },
        p = (e) => {
          let { slug: a } = e;
          return (0, l.jsx)(c.Suspense, {
            children: (0, l.jsx)(x, { slug: a }),
          });
        };
    },
    2743: (e, a, s) => {
      "use strict";
      s.d(a, { default: () => c });
      var l = s(5155);
      s(2115);
      var n = s(6046);
      let i = [
          { name: "Обмен", href: "/" },
          { name: "О нас", href: "/about" },
          { name: "Правила", href: "/rules" },
          { name: "Партнёрская программа", href: "/referral" },
          { name: "AML/KYC", href: "/aml/kyc" },
        ],
        c = () => {
          let e = (0, n.usePathname)();
          return (0, l.jsxs)("footer", {
            children: [
              (0, l.jsxs)("nav", {
                className: "nav-panel nav-panel-bottom",
                children: [
                  (0, l.jsxs)("div", {
                    className: "nav-panel-logo-container",
                    children: [
                      (0, l.jsx)("div", { className: "nav-panel-logo" }),
                      (0, l.jsx)("span", {
                        className: "nav-panel-logo-text",
                        children:
                          "Полуавтоматический сервис по обмену цифровых валют",
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    children: (0, l.jsx)("ul", {
                      className: "nav-panel-main-menu",
                      children: i.map((a) =>
                        (0, l.jsx)(
                          "li",
                          {
                            className: "nav-panel-item",
                            children: (0, l.jsx)("a", {
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
                  (0, l.jsx)("div", {
                    className: "nav-panel-schedule",
                    children: (0, l.jsxs)("div", {
                      className: "timer-container",
                      children: [
                        (0, l.jsx)("div", { className: "timer-image" }),
                        (0, l.jsx)("span", {
                          className: "timer-text",
                          children: "c 10:00 до 22:00(МСК)",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "copyrights",
                children:
                  "\xa9 2025 Swapium. Копирование материалов только с разрешения правообладателя.",
              }),
            ],
          });
        };
    },
    5725: (e, a, s) => {
      "use strict";
      s.d(a, { default: () => t });
      var l = s(5155),
        n = s(2115),
        i = s(6046);
      let c = [
          { name: "Обмен", href: "/" },
          { name: "О нас", href: "/about" },
          { name: "Правила", href: "/rules" },
          { name: "Партнёрская программа", href: "/referral" },
          { name: "Контакты", href: "/contacts" },
          { name: "AML/KYC", href: "/aml/kyc" },
        ],
        t = () => {
          let e = (0, i.usePathname)(),
            [a, s] = (0, n.useState)(!1);
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("nav", {
                className: "nav-panel nav-panel-top",
                children: (0, l.jsxs)("div", {
                  className: "nav-panel-wrapper nav-panel-desktop",
                  children: [
                    (0, l.jsxs)("div", {
                      className: "nav-panel-left",
                      children: [
                        (0, l.jsx)("a", {
                          className: "nav-panel-logo",
                          href: "/",
                          children: (0, l.jsx)("img", {
                            src: "/logo.svg",
                            alt: "",
                            style: { width: "100%" },
                          }),
                        }),
                        (0, l.jsx)("ul", {
                          className: "nav-panel-main-menu",
                          children: c.map((a) =>
                            (0, l.jsx)(
                              "li",
                              {
                                className: "nav-panel-item",
                                children: (0, l.jsx)("a", {
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
                    (0, l.jsxs)("div", {
                      className: "nav-panel-right",
                      children: [
                        (0, l.jsx)("a", {
                          className:
                            "nav-panel-link register-nav-link button button-primary",
                          href: "https://t.me/swapium_io",
                          children: "Поддержка",
                        }),
                        (0, l.jsx)("button", {
                          "data-bs-toggle": "modal",
                          id: "#mobileNavigationModal",
                          "data-bs-target": "#mobileNavigationModal",
                          className: "nav-panel-toggler",
                          type: "button",
                          onClick: () => s(!a),
                        }),
                      ],
                    }),
                  ],
                }),
              }),
              (0, l.jsx)("div", {
                className: "modal mobile-navigation-modal ".concat(
                  a ? "show" : ""
                ),
                id: "mobileNavigationModal",
                "aria-hidden": !a,
                children: (0, l.jsx)("div", {
                  className: "modal-dialog modal-fullscreen",
                  children: (0, l.jsx)("div", {
                    className: "modal-content",
                    children: (0, l.jsxs)("div", {
                      className: "modal-body",
                      children: [
                        (0, l.jsxs)("div", {
                          className: "nav-panel-mobile-top-block",
                          children: [
                            (0, l.jsx)("div", { className: "nav-panel-logo" }),
                            (0, l.jsx)("button", {
                              type: "button",
                              className:
                                "nav-panel-mobile-close modal-close-button",
                              "data-bs-dismiss": "modal",
                              "aria-label": "Закрыть",
                              onClick: () => s(!a),
                            }),
                          ],
                        }),
                        (0, l.jsx)("ul", {
                          className: "nav-panel-main-menu",
                          children: c.map((a) =>
                            (0, l.jsx)(
                              "li",
                              {
                                className: "nav-panel-item",
                                children: (0, l.jsx)("a", {
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
    9340: (e, a, s) => {
      "use strict";
      s.d(a, { i: () => t });
      var l = s(3576),
        n = s(3415),
        i = s(2818);
      let c = (0, l.w)({
          server: { API_URL: n.z.string().url() },
          client: { NEXT_PUBLIC_API_URL: n.z.string().url() },
          runtimeEnv: {
            API_URL: i.env.API_URL,
            NEXT_PUBLIC_API_URL: window.location.origin + "/exchange",
          },
        }),
        t = s(2651).A.create({
          withCredentials: !0,
          baseURL: c.NEXT_PUBLIC_API_URL,
        });
    },
  },
  (e) => {
    var a = (a) => e((e.s = a));
    e.O(0, [202, 380, 967, 527, 629, 969, 441, 517, 358], () => a(3424)),
      (_N_E = e.O());
  },
]);
