/*
 *  Tip which renders individual tip objects as HTML
 */
export const tip = (tipObj) => {
    return `<article class="tip-card">
				<h3 class="tip-title">${tipObj.title}</h3>
                <p class="tip-details">${tipObj.description}</p>
        	</article>`
}