use dioxus::prelude::*;

const FAVICON: Asset = asset!("/assets/favicon.ico");
const MAIN_CSS: Asset = asset!("/assets/main.css");
const MN_LOGO: Asset = asset!("/assets/mn_logo_grad_circle.png");
const MN_LOGO_NO_TEXT: Asset = asset!("/assets/mn_logo_grad_circle_notext_background.png");

const _: Asset = asset!("/assets/fonts/ProximaNova-Regular.otf");
const _: Asset = asset!("/assets/fonts/ProximaNova-Bold.otf");
const _: Asset = asset!("/assets/favicon-32x32.png");
const _: Asset = asset!("/assets/favicon-16x16.png");
const _: Asset = asset!("/assets/apple-touch-icon.png");
const _: Asset = asset!("/assets/android-chrome-192x192.png");
const _: Asset = asset!("/assets/android-chrome-512x512.png");
const _: Asset = asset!("/assets/site.webmanifest");

const TAILWIND_CSS: Asset = asset!("/assets/tailwind.css");

mod discord_logo;
mod socials;
mod telegram_logo;
mod x_logo;

use discord_logo::Discord_Logo;
use socials::Socials;
use telegram_logo::Telegram_Logo;
use x_logo::X_Logo;

fn main() {
    dioxus::launch(App);
}

#[component]
fn App() -> Element {
    rsx! {
        document::Link { rel: "icon", href: FAVICON }
        document::Link { rel: "stylesheet", href: MAIN_CSS }
        document::Link { rel: "stylesheet", href: TAILWIND_CSS }

        Navbar {}
        Hero {}
        Footer {}
    }
}

#[component]
pub fn Hero() -> Element {
    rsx! {
        div {
            id: "hero",
            class: "flex flex-col items-center justify-center bg-background max-w-7xl mx-auto p-5",
            img {
                src: MN_LOGO,
                id: "header",
                class: "m-5 p-5 max-w-2xs md:max-w-sm lg:max-w-md",
            }
            h1 { class: "text-2xl md:text-4xl font-bold text-center gradient-text",
                "Decentralized token creation and fair launch platform."
            }
            h5 { class: "text-md md:text-lg text-center text-text-200", "Coming summer 2025" }
            Socials {}
            div { class: "w-full text-sm md:text-md text-center text-text-200 bg-background-900 rounded-lg p-5 m-5 hook-shadow",
                p {
                    "Feature-rich no code token creater giving devs the power to create a token that meets their descerning needs."
                }
                p {
                    "All tokens created on the MoonNinja platform are 100% fair launch and community driven."
                }
                p { "Users trade against the bonding curve, not the devs." }
                p { "Fully vested bonding curves graduate to a UniswapV4 liquidity pool." }
            }
        }
    }
}

#[component]
pub fn Navbar() -> Element {
    rsx! {
        nav { class: "flex items-center justify-between p-5 bg-secondary-800 mx-auto",
            div { class: "flex items-center",
                img {
                    src: MN_LOGO_NO_TEXT,
                    alt: "Logo",
                    class: "h-8 w-8 mr-2",
                }
                h1 { class: "text-xl font-bold text-text-100", "MoonNinja" }
            }
            ul { class: "flex space-x-4 text-text" }
        }
    }
}

#[component]
pub fn Footer() -> Element {
    let real_time: web_sys::js_sys::Date = web_sys::js_sys::Date::new_0();

    rsx! {
        footer { class: "flex items-center justify-center p-5 bg-secondary-800",
            p { class: "text-text-200 text-center",
                "© {real_time.get_full_year()} MoonNinja. All rights reserved."
            }
        }
    }
}
