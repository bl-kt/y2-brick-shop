# 21/22 Coursework - Lego Brick Shop

## Usage

To start the localhost server for the website, run the following command
```
npm start
```

To start the automatically reloading dev server, which should not be needed, run the following command
```
npm run start-dev
```

No additional set-up should be needed, as the database is ran on an external device.

### Navigation

The main catalogue page can be accessed by hitting any of the three categories on the nav bar, narrowing your search for your desired item already. Along the nav bar are also icons for the account page, wishlist, basket and checkout. You can return to the homepage by clicking the logo.

### Purchasing a brick

Once on the catalogue page, you can add a brick to your basket by pressing the basket button. This will add 1 of the default colour of the brick to your basket. This is stackable. You can also add the brick to your wishlist via the heart button.

You can view the price on the main catalogue page, but further details can be seen on the main product page, accessed by clicking the name of the item.

This allows you to add more than one brick at a time, as well as change the colour of the brick added. Different colours of the same shape of brick do not stack.

### Checking out

You can checkout your purchases by pressing the basket icon, or the checkout button. This will lead you to the basket, where you can review your purchase before hitting the checkout button to finish and pay.

### Accessing Staff Mode

Staff mode can be accessed by pressing the staff mode check box on the top of the catalogue screen.
In this view, you can manually plus and minus stock via the input box below the item.
----

## Design and Implementation Rationale

### Design

Visually, I went for a clean design with minimal flare to avoid undue attention on this when developing. I tried to ensure a high amount of visual feedback when hovering/pressing on buttons, links and images where possible.

I also used a mobile-friendly design that allows almost all of the site, bar the parts where I ran out of time on implementing the actual feature, and as such, did not style it, to be fully mobile friendly out of the box.

### Implementation Rationale

The entire project was a very new thing for me, and I had not tackled any of the problems before. As a result, I struggled a lot, and left a lot of features to last minute, resulting in a shop that is half-baked in places, but with a backend that shows my progress in learning the new concepts presented to me.

In the codebase, I used a large amount of modularization to ensure that each piece of code was easy to locate. Functions were named very directly, even if this created long function names. I extensively used local storage in order to implement by basket and wishlist for a realistic feel without the complication and hastle of adding to a database every time the basket was changed.

All APIs are done through express's router, to ensure clean, modular and maintainable code. You can see the progress in my various ways of creating these routes as you scroll through - as I did not have time to update my previous controller and router logic on my earlier pieces.

Auth0, although minimally implemented, was interesting to play around with. I'd love to implement more with it in the future, as it's a very powerful tool I wasn't aware of beforehand.

I have tried to implement use of 'components' through common html elements like my nav bar, footer and querybar (search/sort/filter), and use JS-generated elements everywhere else, to increase maintainability by centralising assets.

## Key Features

### Core Features

#### Stock Levels

The site maintains an inventory of items for sale, and their stock levels. These stock levels can be manually changed by accessing the staff mode side of the page through the checkbox.

#### Shopping Cart

A shopping cart, for customers to hold their items before purchasing. Items can be added to this from the main store front, or from the individual product's page.

#### Purchase of Multiple Bricks

The shopping cart is capable of holding an unlimitted amount of bricks, of different kinds, or the same design.

#### Simulated Checkout

The site simulates a checkout page that updates stock levels

### Additional Features

#### Wishlist

A wishlist, for customsers to save items that they want to purchase later. This can be added to via the main catalogue page, or individual product page(s) via the heart icons.

#### Search, Filter and Sort

##### Search

The searching algorithm matches up likeness between the entered value and the name of a product on the catalogue page.

##### Filter

Depending on the catalogue page accessed, you can filter by catalogue of a product.
Kit category filters by kits under the same category, such as 'Creator 3-in-1' or 'Lego City'.
Brick category filters by brick shape, such as 'Arch', 'Minifigure', or 'Brick'.

##### Sort

You can sort catalogue items:

* Alphabetically
* Reverse Alphabetically
* Price, Low-to-High
* Price, High-to-Low
* Category, A-Z
* Category, Z-A

#### Individual Product Pages

Each product on the catalogue has it's own page, accessible by unique URL, which presents additional options that are not otherwise customiseable on the main page when quick-adding.

These options include the option to add quantity by more than 1 at a time, change the brick's colour (and view this brick shape/colour combination's individual stock), and add to the basket or wishlist.

#### Seperation of brick attributes (colour/shape) for a wider and more realistic stockbase

In the back-end, the attributes that make up a brick (colours/shape/dimensions, etc) are seperated to give a more realistic overview of the different types of bricks with less storage space.

<!-- #### Model kit affects overall stock, but is added as a single item -->

#### Accounts

A minor account system that supports logging-in, logging-out and uses this data to inform the orders that are pushed to the database.

## Retrospective

Overall, I really enjoyed this project - especially (and unfortunately) near the end, as I finally got an understanding on the major concepts of the module. I feel like I've learnt a lot, and can bring these concepts further into my academic and future career, and use them to upgrade my own projects.

### Unfinished Features and Future Work

In the future, I would like to:

* Further explore testing. This was not done earlier due to many of the backend features being misunderstood and difficult for me to learn, leaving them as last-minute tasks that eventually got swallowed up by time. Therefore, I had nothing to test. I
* Further implement error handling for the basket, wishlist and other features where parameters should be checked to avoid errors and confusing the user.
* Further implement Auth0, and authenticated APIs
* Escape my database queries to leave them less vulnerable to injection.
* Improve my database to allow easier distinction between bricks and sets
* Stock levels relating to the bricks of the kit, not the kit itself.
* A clearer, more visual staff interface with a list of orders. The capability is there, but time was not on my side.
* More indepth searching algorithm
* Stackable filters

### Known issues

* AuthUI update calling on nothing
* Basket does not clear after purchase
* Add to basket from wishlist does not work as basket and wishlist infrastructure changed over time

### References

Kopecky, Jacek. “auth0-example”, https://github.com/portsoc/auth0-example