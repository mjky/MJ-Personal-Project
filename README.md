MJ's Code Louisville personal project

New Albany  Floyd County Animal Control & Center is a not for profit  animal  center and is mainly dedicated towards helping pets who do not have home. It is involved is host of services including, pet adoption, all leading to common goal of helping animals and educating and assisting pet owners to better care for their pets.

Personally I got involved with this center in a very small way  some 20 years ago, as part of fund raising team and was moved by the mission and dedication of people involved in the project. So I decided to take a look at their website and though I found it well organized, I think it could use few further improvement, as any site needs on a regular basis. It will be very rewarding experience if I could be of help in improving this website based on what I learned at CodeLouiville.



SHORTCOMING(s):
Though the New Albany  Floyd County Animal Control & Center is a well run organization and it has a good website, http://www.nafcanimalshelter.org , I would try to optimize it further for small devices.



HOME, PAGE (index.html)
Text content in the home page was disproportionately high on the web pages. With this project, content is reduced to bare minimum for small devices in particular. Site is responsive and navigation color now changes as the sreen size increases above 480px for larger screens and so does the associated image, using media queries.

/***********************
FOR LARGER SCREEN SIZES
************************/
@media screen and (min-width: 660px) {
nav {
	background: gray;
	float: none;
	width: 100%;
	padding: 0 5px 0 5px;
}
#photos li a p {
font-size: 20px;


Footer continues to have a facebook icon which is linked to facbook page of the shelter. However the contact option for connecting via twitter is new as explained in contact page sub heading further below.
</section>
        <footer>
            <a href="https://www.facebook.com/NAFCanimalshelter/"><img src="img/facebook.jpg" alt="Facebook Logo" class="footer-icons"></a>
            <p>&copy; S2017: New Albany/Floyd County Animal Shelter, All Rights Reserved.
        </footer>


Related codes for hyperlink to facebook page of the shelter:
</section>
        <footer>
            <a href="https://www.facebook.com/NAFCanimalshelter/"><img src="img/facebook.jpg" alt="Facebook Logo" class="footer-icons"></a>
            <p>&copy; S2017: New Albany/Floyd County Animal Shelter, All Rights Reserved.
        </footer>



PET FOR ADOPTION, PAGE (adoptable.html)
Though about section is a logical next page, I think it will be better if we could direct viewers straight to main purpose of the site, that is to offer pets for adoption before giving information about the shelter.  Images here will be scaled up for larger screens and linked with tag reference numbers to quickly identify the pet site viewer might be interested in. alt description also includes the pets ref tag no for screen readers.

JavaScript:
Added custom JavaScript on images of adoptable pets, so they open up to full screen container size on being clicked and then close as well upon another click. Currently when an image in clicked on Pets for adoption page, the fullscreen image opens to it's container size below the images, rather then on top of them. Further code imporovement should upgrade to that feature.

Related js codes: 
$(document).ready(function(){
    /* Overlay for images to enhance user experiance and not end up at dead end after each clik on the image */
    var $overlay = $('<div id="photos"></div>');
    var $image = $("<img>");

    $overlay.append($image);
    $("body").append($overlay);
    $("#photos a").click(function(e) {
        e.preventDefault();
        var imageLocation = $(this).children('img').attr("src");

        $image.attr("src", imageLocation);

        $overlay.show();
    });

    $overlay.click(function() {
        $overlay.hide();
    });
})



ABOUT OUR SHELTER, PAGE (about.html)
Content will be two columns for better readability as most of which will be text. Content will be optimized for mobile devices with break point at 480px by stacking. Details about the shelter and it's history could be summarized as well for small devices.



CONTACT, PAGE (contact.html)
On this page as well content will be optimized for mobile devices by stacking below one another from  two columns, and with links to email, phone dialing on smart phones and direct link to twitter text message box for better user experience.

Related codes for user experience, in particular for twitter popup text message:
<section id="primary">
<h3>Our contact information</h3>
<p>Often an email is the best way to contact us, though we welcome phone calls.</p>
<p>
    <ul class="contact-info">
    
        <!--
        On smart user should be connect to Animal shlter phone number by a click on the phone number or icon.
        --> 
        
        <li class="phone"><a href="tel:812-948-5355">
        812-948-5355</a>
        </li>


        <!--
        Depending on supported browsers and user's email setup, user should be initiate an email to be sent to Animal shlter  by a click on the email address or icon.
        --> 


        <li class="mail">
		<ahref="mailto:admin@nafcanimalshelter.org">admin@nafcanimalshelter.org</a>
        </li>


        <!--
        Active and user could sent a tweet to a currently dumb account (being used for
        demostraction purposes)
        -->                     

        <li class="twitter"><a href="http://twitter.com/intent/tweet?
		screen_name=mjmj2550">@NAFCAnimalShelter</a></li>

    </ul>
</p>
</section>  


And media querry codes to make site adjust to different screen sizes, such as two coulmn layout on large screen and then stacking of columns for small devices:

@media screen and (min-width: 480px) {
/********************
TWO COLUMN LAYOUT
*********************/
    #primary {
        width: 45%;
        float: left;
    }

    #secondary {
        width: 45%;
        float: right;
    }
}