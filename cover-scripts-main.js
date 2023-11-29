const genderSelection = document.querySelector("#gender-selection-input");
const coverSelection = document.querySelector("#cover-selection-input");
const rangeSelection = document.querySelector(
  ".fs-rangeslider_track .fs-rangeslider_handle"
);

const coverOptionValues = {
    budget: "budget-friendly",
    claim: "claim-reviews",
    combo: "combo-insurance",
    afrikaans: "cover-in-afrikaans",
  };

function checkFormValues() {
  const gender = genderSelection.value;
  const cover = coverSelection.value;
  const range = rangeSelection.getAttribute("aria-valuenow");

  if (gender && cover && range) {
    document.querySelector("#get-my-deals").disabled = false;
  }

  document.querySelectorAll(".collection-item").forEach((element) => {
    element.children[0].classList.remove("preferred");
    element.style.display = "block";
  });

  const coverItemNames = {
    autoGeneral: "auto-general",
    dialDirect: "dial-direct",
    budgetInsurance: "budget-insurance",
    virseker: "virseker",
    firstForWomen: "1st-for-women",
  };

  let parentSelector = ".collection-list";

  if (undefined !== flkty) {
    parentSelector = ".flickity-slider";
  }

  switch (gender) {
    case "female":
      if (cover === coverOptionValues.afrikaans) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.autoGeneral}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.budgetInsurance}"`
            )
          );
        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.firstForWomen}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.autoGeneral}"`
            )
          );
        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.virseker}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.firstForWomen}"`
            )
          );
        document.querySelector(
          `[cover-item-name="${coverItemNames.dialDirect}"]`
        ).style.display = "none";
      } else if (parseInt(range) < 351000) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`)
          .children[0].classList.add("preferred");

        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.autoGeneral}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.dialDirect}"`
            )
          );
        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.budgetInsurance}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.autoGeneral}"`
            )
          );
        document
          .querySelector(parentSelector)
          .insertBefore(
            document.querySelector(
              `[cover-item-name="${coverItemNames.firstForWomen}"`
            ),
            document.querySelector(
              `[cover-item-name="${coverItemNames.budgetInsurance}"`
            )
          );
        document.querySelector(
          `[cover-item-name="${coverItemNames.virseker}"]`
        ).style.display = "none";
      } else if (parseInt(range) >= 351000) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.firstForWomen}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.virseker}"]`
        ).style.display = "none";
      }
      break;
    case "male":
      if (cover === coverOptionValues.budget) {
        document
          .querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"]`
          )
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.claim
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.claim
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.afrikaans
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.afrikaans
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.combo
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.combo
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      }
      break;
    default:
      if (cover === coverOptionValues.budget) {
        document
          .querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"]`
          )
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.claim
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.claim
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.afrikaans
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.afrikaans
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) < 351000 &&
        cover === coverOptionValues.combo
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      } else if (
        parseInt(range) >= 351000 &&
        cover === coverOptionValues.combo
      ) {
        document
          .querySelector(`[cover-item-name="${coverItemNames.virseker}"]`)
          .children[0].classList.add("preferred");

        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ), // third
          document.querySelector(
            `[cover-item-name="${coverItemNames.dialDirect}"`
          ) // last
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ), // second
          document.querySelector(
            `[cover-item-name="${coverItemNames.budgetInsurance}"`
          ) // third
        );
        document.querySelector(parentSelector).insertBefore(
          document.querySelector(
            `[cover-item-name="${coverItemNames.virseker}"`
          ), // first
          document.querySelector(
            `[cover-item-name="${coverItemNames.autoGeneral}"`
          ) // second
        );
        document.querySelector(
          `[cover-item-name="${coverItemNames.firstForWomen}"]`
        ).style.display = "none";
      }
      break;
  }

  if (flkty) {
    flkty.reloadCells();
    flkty.select(0);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const queryParams = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  const gender = queryParams.gender;
  const coverOption = queryParams.coverOption;
  const carValue = queryParams.carValue;
  const coverType = queryParams.coverType;

  genderSelection.value = gender;

  switch (gender) {
    case "male":
      document
        .querySelector("#male-gender-selection")
        .classList.add("selection-button-active");
      break;
    case "female":
      document
        .querySelector("#female-gender-selection")
        .classList.add("selection-button-active");
      break;
    default:
      document
        .querySelector("#other-gender-selection")
        .classList.add("selection-button-active");
      break;
  }

  coverSelection.value = coverOption;
  switch (coverOption) {
    case coverOptionValues.budget:
        document.querySelector(`[cover-option="${coverOptionValues.budget}]"`).classList.add("cover-selection-active")
        break;
    case coverOptionValues.claim:
        document.querySelector(`[cover-option="${coverOptionValues.claim}]"`).classList.add("cover-selection-active")
        break;
    case coverOptionValues.combo:
        document.querySelector(`[cover-option="${coverOptionValues.combo}]"`).classList.add("cover-selection-active")
        break;
    case coverOptionValues.afrikaans:
        document.querySelector(`[cover-option="${coverOptionValues.afrikaans}]"`).classList.add("cover-selection-active")
        break;
    default:
        break;
  }

  rangeSelection.setAttribute("aria-valuenow", carValue);

  var updateEvent = new CustomEvent("updateSlider", {
    detail: null
  });
  window.dispatchEvent(updateEvent);

  document.querySelector("#ccCheckbox").checked =
    coverType === "essential" ? true : false;
});
