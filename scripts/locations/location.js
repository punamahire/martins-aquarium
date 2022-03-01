/*
 *  location which renders individual location objects as HTML
 */
export const location = (locationObj) => {
    return `<article class="location-card">
				<h3 class="location-name">${locationObj.name}</h3>
                <p class="location-details">${locationObj.address}</p>
                <p class="location-site">${locationObj.website}</p>
        	</article>`
}