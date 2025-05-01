use dioxus::prelude::*;

#[component]
pub fn Telegram_Logo() -> Element {
    rsx! {
        svg {
            class: "social-icon w-8 h-8 md:w-10 md:h-10",
            xmlns: "http://www.w3.org/2000/svg",
            shape_rendering: "geometricPrecision",
            text_rendering: "geometricPrecision",
            image_rendering: "optimizeQuality",
            fill_rule: "evenodd",
            clip_rule: "evenodd",
            view_box: "0 0 333334 333334",
            path { d: "M166667 0c92048 0 166667 74619 166667 166667s-74619 166667-166667 166667S0 258715 0 166667 74619 0 166667 0zm80219 91205l-29735 149919s-4158 10396-15594 5404l-68410-53854s76104-68409 79222-71320c3119-2911 2079-3534 2079-3534 207-3535-5614 0-5614 0l-100846 64043-42002-14140s-6446-2288-7069-7277c-624-4992 7277-7694 7277-7694l166970-65498s13722-6030 13722 3951zm-87637 122889l-27141 24745s-2122 1609-4443 601l5197-45965 26387 20619z" }
        }
    }
}
