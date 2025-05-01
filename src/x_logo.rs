use dioxus::prelude::*;

#[component]
pub fn X_Logo() -> Element {
    rsx! {
        svg {
            class: "social-icon w-8 h-8 md:w-10 md:h-10",
            xmlns: "http://www.w3.org/2000/svg",
            shape_rendering: "geometricPrecision",
            text_rendering: "geometricPrecision",
            image_rendering: "optimizeQuality",
            fill_rule: "evenodd",
            clip_rule: "evenodd",
            view_box: "0 0 512 462.799",
            path {
                fill_rule: "nonzero",
                d: "M403.229 0h78.506L310.219 196.04 512 462.799H354.002L230.261 301.007 88.669 462.799h-78.56l183.455-209.683L0 0h161.999l111.856 147.88L403.229 0zm-27.556 415.805h43.505L138.363 44.527h-46.68l283.99 371.278z",
            }
        }
    }
}
