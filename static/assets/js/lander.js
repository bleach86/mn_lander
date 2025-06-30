document.addEventListener("DOMContentLoaded", function () {
  const customizeableSection = document.getElementById("customizeable");
  const fairLaunchSection = document.getElementById("fair-launch");
  const currentYearElement = document.getElementById("current-year");
  const gasEfficientSection = document.getElementById("gas-efficient");
  const communityDrivenSection = document.getElementById("community");
  const socialLinksSection = document.getElementById("socials");
  const graduationSection = document.getElementById("graduation");

  // Set the current year in the footer
  if (currentYearElement) {
    const currentYear = new Date().getFullYear();
    currentYearElement.textContent = currentYear;
  }

  const customizeableObserver = new IntersectionObserver(
    handleCustomizableIntersection,
    {
      threshold: 0.65,
    }
  );
  if (customizeableSection) {
    customizeableObserver.observe(customizeableSection);
  } else {
    //
  }

  const fairLaunchObserver = new IntersectionObserver(
    handleFairLaunchIntersection,
    {
      threshold: 0.25,
    }
  );
  if (fairLaunchSection) {
    fairLaunchObserver.observe(fairLaunchSection);
  } else {
    //
  }

  const gasEfficientObserver = new IntersectionObserver(
    handleGasEfficientIntersection,
    {
      threshold: 0.25,
    }
  );
  if (gasEfficientSection) {
    gasEfficientObserver.observe(gasEfficientSection);
  } else {
    //
  }

  const communityDrivenObserver = new IntersectionObserver(
    handleCommunityDrivenIntersection,
    {
      threshold: 0.25,
    }
  );
  if (communityDrivenSection) {
    communityDrivenObserver.observe(communityDrivenSection);
  } else {
    //
  }

  const socialLinksObserver = new IntersectionObserver(
    handleSocialLinksIntersection,
    {
      threshold: 0.25,
    }
  );
  if (socialLinksSection) {
    socialLinksObserver.observe(socialLinksSection);
  } else {
    //
  }

  const graduationObserver = new IntersectionObserver(
    handleGraduationIntersection,
    {
      threshold: 0.25,
    }
  );
  if (graduationSection) {
    graduationObserver.observe(graduationSection);
  } else {
    //
  }
});

function handleGraduationIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector("h1");
      const animatedBody = entry.target.querySelector(".animate-body");
      const sectionDetails = entry.target.querySelectorAll("p");

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
        sectionTitle.classList.add("animate-fade-up");
        sectionTitle.classList.add("animate-delay-100");
      }

      if (animatedBody) {
        animatedBody.classList.remove("opacity-0");
        animatedBody.classList.add("animate-fade-down");
        animatedBody.classList.add("animate-delay-100");
      }

      if (sectionDetails) {
        sectionDetails.forEach((detail, index) => {
          const delay = 250 * index + 100;

          setTimeout(() => {
            detail.classList.remove("opacity-0");
            detail.classList.add("animate-fade-left");
            detail.classList.add(`animate-delay-${delay}`);
          }, delay);
        });
      }
    } else {
      //
    }
  });
}

function handleSocialLinksIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector("h2");
      const animatedBody = entry.target.querySelector(".animate-body");
      const socialLinks = entry.target.querySelectorAll("a");
      const socialDescription = entry.target.querySelector("p");

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
        sectionTitle.classList.add("animate-fade-down");
        sectionTitle.classList.add("animate-delay-100");
      }

      if (animatedBody) {
        animatedBody.classList.remove("opacity-0");
        animatedBody.classList.add("animate-fade-up");
        animatedBody.classList.add("animate-delay-100");
      }

      if (socialDescription) {
        socialDescription.classList.remove("opacity-0");
        socialDescription.classList.add("animate-fade-right");
        socialDescription.classList.add("animate-delay-200");
      }

      if (socialLinks) {
        socialLinks.forEach((link, index) => {
          const delay = 250 * index + 100;

          setTimeout(() => {
            link.classList.remove("opacity-0");
            link.classList.add("animate-fade-down");
            link.classList.add(`animate-delay-${delay}`);
          }, delay);
        });
      }
    } else {
      //
    }
  });
}

function handleCommunityDrivenIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector("h2");
      const sectionDetails = entry.target.querySelectorAll("p");
      const sectionListItems = entry.target.querySelectorAll("li");
      const animatedBody = entry.target.querySelector(".animate-body");
      let itemDelay = 1000;

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
        sectionTitle.classList.add("animate-fade-down");
        sectionTitle.classList.add("animate-delay-100");
      }

      if (animatedBody) {
        animatedBody.classList.remove("opacity-0");
        animatedBody.classList.add("animate-fade-left");
        animatedBody.classList.add("animate-delay-100");
      }

      if (sectionDetails) {
        sectionDetails.forEach((detail) => {
          detail.classList.remove("opacity-0");
          detail.classList.add("animate-fade-left");
          detail.classList.add("animate-duration-1500");

          detail.classList.add("animate-delay-500");
        });
      }
      sectionListItems.forEach((item, index) => {
        const itemDirection = index % 2 === 0 ? "fade-left" : "fade-right";
        const itemSpan = item.querySelector("span");
        setTimeout(() => {
          itemSpan.classList.remove("opacity-0");
          item.classList.add(`animate-${itemDirection}`);
        }, itemDelay);

        itemDelay += 100;
      });
    } else {
      //
    }
  });
}

function handleGasEfficientIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const gasBody = entry.target.querySelector(".gas-body");
      const sectionTitle = entry.target.querySelector("h2");
      const sectionDetails = entry.target.querySelectorAll("p");

      if (gasBody) {
        gasBody.classList.remove("opacity-0");
        gasBody.classList.add("animate-fade-right");
      }

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
        sectionTitle.classList.add("animate-fade-down");
        gasBody.classList.add("animate-delay-500");
      }

      if (sectionDetails) {
        setTimeout(() => {
          sectionDetails.forEach((detail, index) => {
            const delay = 250 * index + 100;

            setTimeout(() => {
              detail.classList.remove("opacity-0");
              detail.classList.add("animate-fade-down");
              detail.classList.add(`animate-delay-${delay}`);
            }, delay);
          });
        }, 500);
      }
    }
  });
}

function handleFairLaunchIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector("h1");
      const fairLaunchCards =
        entry.target.querySelectorAll(".fair-launch-card");

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
        sectionTitle.classList.add("animate-fade-up");
        sectionTitle.classList.add("animate-delay-100");
      }

      setTimeout(() => {
        fairLaunchCards.forEach((card, index) => {
          const cardDelay = 250 * index + 100;

          setTimeout(() => {
            card.classList.remove("opacity-0");
            card.classList.add("animate-fade-up");
            card.classList.add(`animate-delay-${cardDelay}`);
          }, cardDelay);
        });
      }, 500);
    } else {
      //
    }
  });
}

function handleCustomizableIntersection(entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const sectionTitle = entry.target.querySelector("h1");
      const sectionDetails = entry.target.querySelectorAll("p");
      const sectionListItems = entry.target.querySelectorAll("li");

      var itemDelay = 1000;
      var nextItemDirection = 1;

      if (sectionTitle) {
        sectionTitle.classList.remove("opacity-0");
      }

      const animatedBody = entry.target.querySelector(".animate-body");

      if (animatedBody) {
        animatedBody.classList.remove("opacity-0");
        animatedBody.classList.add("animate-fade-up");
        animatedBody.classList.add("animate-delay-100");
      }

      if (sectionDetails) {
        sectionDetails.forEach((detail) => {
          detail.classList.remove("opacity-0");
          detail.classList.add("animate-fade-left");
          detail.classList.add("animate-duration-1500");
          detail.classList.add("animate-delay-500");
        });
      }

      sectionListItems.forEach((item, index) => {
        const itemDirection =
          nextItemDirection % 2 === 0 ? "fade-left" : "fade-right";
        nextItemDirection++;
        const itemSpan = item.querySelector("span");

        setTimeout(() => {
          itemSpan.classList.remove("opacity-0");
          item.classList.add(`animate-${itemDirection}`);
        }, itemDelay);

        itemDelay += 100;
      });
    } else {
      //
    }
  });
}
