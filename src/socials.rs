use dioxus::prelude::*;

use crate::Discord_Logo;
use crate::Telegram_Logo;
use crate::X_Logo;

#[component]
pub fn Socials() -> Element {
    rsx! {
        div { class: "socials m-8",
            a { href: "https://x.com/MoonNinjaDefi", X_Logo {} }
            a { href: "https://discord.gg/Rnw67qnzRe", Discord_Logo {} }
            a { href: "https://t.me/MoonNinjaDeFi", Telegram_Logo {} }

        }
    }
}
