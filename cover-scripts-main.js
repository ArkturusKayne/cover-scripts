
const genderSelection = document.querySelector("#gender-selection-input");
const coverSelection = document.querySelector("#cover-selection-input");
const rangeSelection = document.querySelector(".fs-rangeslider_track .fs-rangeslider_handle");

function checkFormValues() {
    const gender = genderSelection.value;
    const cover = coverSelection.value;
    const range = rangeSelection.getAttribute('aria-valuenow');

    document.querySelectorAll('.collection-item').forEach((element) => {
        element.children[0].classList.remove('preferred');
        element.style.display = 'block';
    })

    const coverOptionValues = {
        budget: 'budget-friendly',
        claim: 'claim-reviews',
        combo: 'combo-insurance',
        afrikaans: 'cover-in-afrikaans',
    }

    const coverItemNames = {
        autoGeneral: 'auto-general',
        dialDirect: 'dial-direct',
        budgetInsurance: 'budget-insurance',
        virseker: 'virseker',
        firstForWomen: '1st-for-women'
    };

    switch (gender) {
        case 'female':
            if (cover === coverOptionValues.afrikaans) {
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.order = '1';
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '3';
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.display = 'none';
            } else if (parseInt(range) < 351000) {
                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).children[0].classList.add('preferred');

                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.order = '0';
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.display = 'none';
            } else if (parseInt(range) >= 351000) {
                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).children[0].classList.add('preferred');

                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.order = '0';
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '2';
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '3';
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.display = 'none';
            }
            break;
        case'male':
    
        if (cover === coverOptionValues.budget) {
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
        }
        break;
        default:

        if (cover === coverOptionValues.budget) {
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
            
        } else if (parseInt(range) < 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.order = '0';
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).style.order = '1';
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).style.order = '2';
            document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.order = '3';
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
        }
            break;
    }
}
