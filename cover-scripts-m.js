
const genderSelection = document.querySelector("#gender-selection-input");
const coverSelection = document.querySelector("#cover-selection-input");
const rangeSelection = document.querySelector(".fs-rangeslider_track .fs-rangeslider_handle");

function checkFormValues() {
    const gender = genderSelection.value;
    const cover = coverSelection.value;
    const range = rangeSelection.getAttribute('aria-valuenow');

    if(gender && cover && range) {
        document.querySelector("#get-my-deals").disabled = false;
    }

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

                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)
                ) 
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)
                )
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"`)
                )
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"]`).style.display = 'none';
            } else if (parseInt(range) < 351000) {
                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).children[0].classList.add('preferred');


                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)
                ) 
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)
                )
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"`),
                    document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)
                )
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.display = 'none';
            } else if (parseInt(range) >= 351000) {
                document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).children[0].classList.add('preferred');

                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// third
                    document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// last
                ) 
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                    document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// third
                )
                document.querySelector('.collection-list').insertBefore(
                    document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"`),// first
                    document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
                )
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).style.display = 'none';
            }
            break;
        case'male':
    
        if (cover === coverOptionValues.budget) {
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
        }
        break;
        default:

        if (cover === coverOptionValues.budget) {
            document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"]`).children[0].classList.add('preferred');


            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
            
        } else if (parseInt(range) < 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.claim) {
            document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.afrikaans) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) < 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';

        } else if (parseInt(range) >= 351000 && cover === coverOptionValues.combo) {
            document.querySelector(`[cover-item-name="${coverItemNames.virseker}"]`).children[0].classList.add('preferred');

            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`),// third
                document.querySelector(`[cover-item-name="${coverItemNames.dialDirect}"`)// last
            ) 
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`),// second
                document.querySelector(`[cover-item-name="${coverItemNames.budgetInsurance}"`)// third
            )
            document.querySelector('.collection-list').insertBefore(
                document.querySelector(`[cover-item-name="${coverItemNames.virseker}"`),// first
                document.querySelector(`[cover-item-name="${coverItemNames.autoGeneral}"`)// second
            )
            document.querySelector(`[cover-item-name="${coverItemNames.firstForWomen}"]`).style.display = 'none';
        }
            break;
    }
    flkty.reloadCells();
    
    // Optionally, slide to the first cell or any other cell if desired
    flkty.select(0);
}
