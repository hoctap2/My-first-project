/*Name: Dan Duc Vu
Date: 2021/11/25
Purpose: Final Project*/

//1. Create some Objects:
//Store Item Object
function StoreItem(id, name, price, qtyOnHand, maxPerCustomer, category, shippingCost, reviews, description, image) {
	this.id = id;                           //string
	this.name = name;                       //string 
	this.price = price;                     //number
	this.qtyOnHand = qtyOnHand;             //number
	this.maxPerCustomer = maxPerCustomer;   //number
	this.category = category;               //string
	this.shippingCost = shippingCost;       //number
	this.reviews = reviews;                 //array of strings
	this.description = description;         //string
	this.image = image;                     //string
}
//Cart Item Object
function CartItem(id, price, qty, shipping) {
	this.id = id;                     //string
	this.price = price;             //float
	this.qty = qty;                 //number
	this.shipping = shipping;       //float
}

//2. Create some global variables:
//An empty array for the store items
var storeItems = [];
//An empty array for the cart items
var cartItems = [];

//3. Create initialize function
//This function will be called when the page loads
window.onload = function initialize() {
	//Display the current Day and Time
	var dateArea = document.getElementById("dateArea");
	dateArea.innerHTML = Date();
	//Populate the store items array with 15 store item objects
	//| ID | Product Name | Price | Qty | Max | Category | Image |
	storeItems.push(new StoreItem("S1", "Nike Air Max Pre-Day", 100.0, 60, 10, "Shoes", 3.0, "", "Taking the classic look of heritage Nike Running into a new realm, the Nike Air Max Pre-Day brings you a fast-paced look that's ready for today's world.A true nod to the past with a design made from at least 20% recycled material by weight, it keeps the retro-athletics aesthetic alive.A new Air window energises the look, mixing head-turning style with unbelievably soft cushioning.", "pictures/nike1.png"));
	storeItems.push(new StoreItem("S2", "Nike Pegasus Trail 3 GORE-TEX", 200.0, 70, 10, "Shoes", 3.0, "", "Over the river and through the woods, you're ready for it all. These trail running shoes have improved structure and durability while maintaining flexibility wherever your run takes you. Lugs and improved traction help keep you steady on rough terrain. The water-resistant upper helps keep you moving on rocky trails even when stormy conditions try to slow you down. Don't let the rain stop you—lace up and take on the elements.", "pictures/nike2.png"));
	storeItems.push(new StoreItem("S3", "Nike Air Jordan 1 Mid SE", 150.0, 80, 10, "Shoes", 3.0, "", "Ground your style in Flight with the Air Jordan 1 Mid, the sneaker of endless possibilities.Fresh as ever, this special edition of the famous mid-top shoe delivers non-stop comfort for anyone who can't get enough of the heritage classic.", "pictures/nike3.png"));
	storeItems.push(new StoreItem("S4", "Nike Kyrie 7 By You", 100.0, 25, 90, "Shoes", 3.0, "", "Kyrie Irving is a creative force on and off the court—you can be too. He needs his shoes to keep up with his playmaking, but also sync with his boundary-pushing style and ethos. The Kyrie 7 By You is tuned for the next generation of energy return, control, speed and self-expression. Leave your mark while optimising the shoe's fit, court feel and banking ability.", "pictures/nike4.png"));
	storeItems.push(new StoreItem("S5", "Nike Phantom GT Academy By You", 100.0, 105, 10, "Shoes", 3.0, "", "Take your skills to the next level in the Nike Phantom GT Academy By You. After analysing thousands of football-specific moves, a tacky material was added to the synthetic leather to give you better touch and control of the ball. Off-centre laces and specialised traction let you play with precision.", "pictures/nike5.png"));
  	storeItems.push(new StoreItem("S6", "Nike React Infinity Run Flyknit 2 Running Shoe", 150.0, 130, 10, "Shoes", 3.0, "", "Designed to keep you going at any level, this all-distance running shoe sits on springy, responsive React foam that turns every step into returned energy. The breathable Flyknit upper sports integrated Flywire cables that anchor it to the sole with a dynamic, flexible fit, while rocker construction moves naturally through all the phases of a runner's stride for a smooth, stable ride.", "pictures/nike6.png"));
	storeItems.push(new StoreItem("B1", "Classic II Genuine Shearling Lined Short", 160.0, 60, 13, "Boots", 3.0, "", "Pretreated to protect against moisture and staining, this timeless UGG boot is comfier and cozier than ever, with a soft lining crafted from genuine shearling.", "pictures/b1.png"));
	storeItems.push(new StoreItem("B2", "Adirondack III Waterproof Tall Boot", 280.0, 30, 13, "Boots", 3.0, "", "A flexible lace-up boot temperature rated to -25º Fahrenheit features a waterproof leather upper and plush UGGpure™ lining for cozy comfort.", "pictures/b2.png"));
	storeItems.push(new StoreItem("B3", "Chevonne Chelsea Waterproof Rain Boot", 360.0, 90, 10, "Boots", 3.0, "", "A cushy footbed lined with genuine shearling adds cozy comfort to a Chelsea-inspired rain boot made with a stretchy neoprene shaft for a snug fit.", "pictures/b3.png"));
	storeItems.push(new StoreItem("B4", "Adirondack III Waterproof Bootie", 260.0, 40, 13, "Boots", 3.0, "", "A DryTech waterproof finish furthers the rugged appeal of this essential lace-up boot.", "pictures/b4.png"));
	storeItems.push(new StoreItem("B5", "Miller Mixed Materials Lug Sole Boot", 450.0, 50, 13, "Boots", 3.0, "", "A logo medallion adds subtle signature style to a lace-up boot set on a lofty block heel.", "pictures/b5.png"));
  	storeItems.push(new StoreItem("B6", "UGG Classic Mini Waterproof Clear Boot", 180.0, 40, 13, "Boots", 3.0, "", "A clear upper emblazoned with bold logo lettering brings a fashion-forward update—along with waterproof protection—to UGG's classic mini boot. The plush UGGpure™ insole lining—a textile made entirely from wool but crafted to look and feel like genuine shearling—adds cozy flair to the look.", "pictures/b6.png"));
	storeItems.push(new StoreItem("SAL1", "Prada Logo Slide Sandal", 825.0, 60, 23, "Sandals", 3.0, "", "Prada's logo brands ultraplush terry cloth sliders that make a bold statement while lounging poolside or strolling the beach.", "pictures/sal1.png"));
	storeItems.push(new StoreItem("SAL2", "UGG Oh Fluffita Genuine Shearling Slingback Sandal", 260.0, 100, 23, "Sandals", 3.0, "", "Plush shearling adds undeniable warmth and comfort to an easy slingback sandal with a rubber sole for indoor/outdoor wear.", "pictures/sal2.png"));
	storeItems.push(new StoreItem("SAL3", "UGG Nella Slingback Platform Sandal", 140.0, 80, 23, "Sandals", 3.0, "", "A contrasting platform set on a grippy rubber sole elevates this summery slingback sandal designed for comfort with three layers of contoured cushioning.", "pictures/sal3.png"));
	storeItems.push(new StoreItem("SAL4", "Burberry Furley Slide Sandal", 240.0, 50, 23, "Sandals", 3.0, "", "Tonal checks at the band keep the branding understated and the look super versatile on this slide sandal with a molded cupsole.", "pictures/sal4.png"));
	storeItems.push(new StoreItem("SAL5", "Tory Burch Double T Sport Slide Sandal", 200.0, 40, 23, "Sandals", 3.0, "", "A sleek leather slide accented by Tory's signature double-T logo is ready to upgrade your warm-weather style.", "pictures/sal5.png"));
  	storeItems.push(new StoreItem("SAL6", "Jax Sandal", 155.0, 20, 23, "Sandals", 3.0, "", "An ankle strap covered in rhinestones enlivens this classic sandal boosted on a stiletto heel and lightly padded footbed.", "pictures/sal6.png"));
	//Call the displayStoreItems function to display the store items
	displayStoreItems();
	//Call the displayCart function to display the cart
	displayCartItems();
}; //End of initialize function

//4. Create Display Store Items Function
//Create the function that will display the store items array
function displayStoreItems() {
	// Create a variable to get the value from currency change function
	var symbol = currencyChange();
	document.getElementById("inventoryOutput").innerHTML = "";
	var storeItemsValue = document.getElementById("displayFilter").value;
	// Create the dynamically generated table
	var table = "";
	for(var r = 0; r < storeItems.length; r++) {
		if(storeItems[r].name.length > 20) {
			storeItems[r].name = storeItems[r].name.slice(0, 20) + "...";
		}
		if(storeItemsValue === "All") {
			table += "<tr>";
			table += "<td>" + "<img src=" + storeItems[r].image + ' width=\150px" height="150px" class=\'imgProduct\'></td>' + "<td colspan='10'>ID: " + storeItems[r].id + "</td>" + "<td class='nameProduct'>Name: " + storeItems[r].name + "</td>" + "<td>Category: " + storeItems[r].category + "</td>" + "<td>Qty: " + storeItems[r].qtyOnHand + "</td>" + "<td>Max: " + storeItems[r].maxPerCustomer + "</td>" + "<td>Price: " + symbol.format(exchangeCurrency(storeItems[r].price)) + "</td>";
			table += "</tr>";
		}
		if(storeItemsValue === "Shoes") {
			if(storeItems[r].category === "Shoes") {
				table += "<tr>";
				table += "<td>" + "<img src=" + storeItems[r].image + ' width=\150px" height="150px"></td>' + "<td>ID: " + storeItems[r].id + "</td>" + "<td class='nameProduct' >Name: " + storeItems[r].name + "</td>" + "<td>Category: " + storeItems[r].category + "</td>" + "<td>Qty: " + storeItems[r].qtyOnHand + "</td>" + "<td>Max: " + storeItems[r].maxPerCustomer + "</td>" + "<td>Price: " + symbol.format(exchangeCurrency(storeItems[r].price)) + "</td>";
				table += "</tr>";
			}
		}
		if(storeItemsValue === "Boots") {
			if(storeItems[r].category === "Boots") {
				table += "<tr>";
				table += "<td>" + "<img src=" + storeItems[r].image + ' width=\150px" height="150px"></td>' + "<td>ID: " + storeItems[r].id + "</td>" + "<td class='nameProduct'>Name: " + storeItems[r].name + "</td>" + "<td>Category: " + storeItems[r].category + "</td>" + "<td>Qty: " + storeItems[r].qtyOnHand + "</td>" + "<td>Max: " + storeItems[r].maxPerCustomer + "</td>" + "<td> Price: " + symbol.format(exchangeCurrency(storeItems[r].price)) + "</td>";
				table += "</tr>";
			}
		}
		if(storeItemsValue === "Sandals") {
			if(storeItems[r].category === "Sandals") {
				table += "<tr>";
				table += "<td>" + "<img src=" + storeItems[r].image + ' width=\150px" height="150px">' + "<td>ID: " + storeItems[r].id + "</td>" + "<td class='nameProduct'>Name: " + storeItems[r].name + "</td>" + "<td>Category: " + storeItems[r].category + "</td>" + "<td>Qty: " + storeItems[r].qtyOnHand + "</td>" + "<td>Max: " + storeItems[r].maxPerCustomer + "</td>" + "<td>Price: " + symbol.format(exchangeCurrency(storeItems[r].price)) + "</td>";
				table += "</tr>";
			}
		}
	}
	// Output the table with the heading
	document.getElementById("inventoryOutput").innerHTML += "<table>" + table + "</table>";
} //End of displayStoreItems function

//5. Display Cart Items Function
//Create a function that will display the cart items array
function displayCartItems() {
	// Create variables
	var symbol = currencyChange();
	var getItem = document.getElementById("addItemId").value;
	var getQty = document.getElementById("addItemQty").value;
	var detailOutput = document.getElementById("cartOutput");
	//Get the value of quantity
	getQty = parseFloat(getQty);
	// Add items to the cart
	if(cartItems.length == 0) {
		for(var i = 0; i < storeItems.length; i++) {
			storeItems[i].price = parseFloat(storeItems[i].price);
			if(getItem == storeItems[i].id && getQty <= storeItems[i].maxPerCustomer && getQty > 0) {
				detailOutput.innerHTML = "";
				var subtotal = getQty * storeItems[i].price;
				parseFloat(subtotal);
				cartItems.push(new CartItem(storeItems[i].id, storeItems[i].price, getQty, storeItems[i].shippingCost));
				detailOutput.innerHTML += storeItems[i].id + " | " + symbol.format(exchangeCurrency(storeItems[i].price)) + " | " + getQty + " | " + symbol.format(exchangeCurrency(subtotal)) + "<br>";
				storeItems[i].qtyOnHand -= getQty;
			}
		}
	}
	// Add items to the cart if the item is already in the cart
	else {
		var i = 0;
		while(i < cartItems.length) {
			if(getItem == cartItems[i].id) {
				cartItems[i].qty = Number(cartItems[i].qty) + Number(getQty);
				for(var j = 0; j < storeItems.length; j++) {
					// if the item is already in the cart, update the quantity and subtotal
					if(storeItems[j].id == cartItems[i].id) {
						// Alert if the quantity is more than the maximum per customer
						if(cartItems[i].qty > storeItems[j].maxPerCustomer) {
							alert("Maximum quantity of " + cartItems[i].id + ": " + storeItems[j].maxPerCustomer);
							cartItems[i].qty = Number(cartItems[i].qty) - Number(getQty);
							//update the quantity left in the store
							// storeItems[j].qtyOnHand -= cartItems[i].qty;
							detailOutput.innerHTML = "";
							break; //break the loop
						} 
						else {
							detailOutput.innerHTML = "";
							var subtotal = cartItems[i].qty * cartItems[i].price;
							subtotal = parseFloat(subtotal);
							storeItems[j].qtyOnHand -= Number(getQty);
							break; //break the loop
						}
					}
				}
				break; //break the loop
			} 
			else {
				// If the new item is different then add a new item to cart
				if(getItem != cartItems[i].id && i == cartItems.length - 1 && getQty > 0) {
					detailOutput.innerHTML = "";
					// Add another one to cart
					for(var j = 0; j < storeItems.length; j++)
						if(getItem == storeItems[j].id && getQty > storeItems[j].maxPerCustomer) {
							alert(" > Max per person onhand");
							break; //break the loop
						} else if(getItem == storeItems[j].id && getQty <= storeItems[j].maxPerCustomer) {
						cartItems.push(new CartItem(storeItems[j].id, storeItems[j].price, getQty, storeItems[j].shippingCost));
						storeItems[j].qtyOnHand -= Number(getQty);
						break; //break out of the loop
					}
					break; //break out of the loop
				}
				i++;
			}
		}
		// Output the cart items
		for(k = 0; k < cartItems.length; k++) {
			detailOutput.innerHTML += cartItems[k].id + " | " + symbol.format(exchangeCurrency(cartItems[k].price)) + " | " + cartItems[k].qty + " | " + symbol.format(exchangeCurrency(cartItems[k].price * cartItems[k].qty)) + "<br>";
		}
	}
	// Call the function to display the total cost each time the cart is updated
	calculateCartTotals();
} // End of displayCartItems function

// Function to display the updated cart totals
function displayUpdatedCart() {
	var symbol = currencyChange();
	var detailOutput = document.getElementById("cartOutput");
	detailOutput.innerHTML = "";
    // Output the cart items
	for(j = 0; j < storeItems.length; j++) {
		for(i = 0; i < cartItems.length; i++) {
			if(cartItems[i].id == storeItems[j].id) {
				cartItems[i].price = storeItems[j].price;
				var subtotal = cartItems[i].price * cartItems[i].qty;
				detailOutput.innerHTML += cartItems[i].id + " | " + symbol.format(exchangeCurrency(cartItems[i].price)) + " | " + cartItems[i].qty + " | " + symbol.format(exchangeCurrency(subtotal)) + "<br>";
			}
		}
	}
} // End of displayUpdatedCart function

//6. Calculate Cart Totals Function to display the total cost of the cart
function calculateCartTotals() {
	// Create variables
	var symbol = currencyChange();
	var itemsSubtotal = 0;
	var estimatedShipping = 0;
	var subtotal = 0;
	var estimatedTax = 0;
	var orderTotal = 0;
	var checkoutOutput = document.getElementById("cartCheckout");
    // for loop to calculate the subtotal
	for(var i = 0; i < cartItems.length; i++) {
		itemsSubtotal += cartItems[i].price * cartItems[i].qty;
		estimatedShipping += cartItems[i].shipping;
	}
	// Calculate the subtotal
	subtotal = itemsSubtotal + estimatedShipping;
	// Calculate the tax
	estimatedTax = subtotal * 0.13;
	// Calculate the order total
	orderTotal = subtotal + estimatedTax;
	// Output the cart totals
	checkoutOutput.innerHTML = "<hr>Items Subtotal: " + symbol.format(exchangeCurrency(itemsSubtotal)) + "<br>" + "Estimated Shipping: " + symbol.format(exchangeCurrency(estimatedShipping)) + "<hr>" + "Subtotal: " + symbol.format(exchangeCurrency(subtotal)) + "<br>" + "Estimated Tax: " + symbol.format(exchangeCurrency(estimatedTax)) + "<br>" + "Order Total: " + symbol.format(exchangeCurrency(orderTotal));
} // End of calculateCartTotals function

//7. Change Currency symbol Function
function currencyChange() {
	// Create a variable to hold the currency symbol
	var symbol = "";
	// If the currency is CAD, set the symbol to CA$
	if(document.getElementById("currencySelector").value == "CAD") {
		symbol = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "CAD",
			minimumFractionDigits: 2,
		});
	}
	// If the currency is USD, set the symbol to $
	else if(document.getElementById("currencySelector").value == "USD") {
		symbol = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "USD",
			minimumFractionDigits: 2,
		});
	}
	// If the currency is GBP, set the symbol to £
	else if(document.getElementById("currencySelector").value == "GBP") {
		symbol = new Intl.NumberFormat("en-US", {
			style: "currency",
			currency: "GBP",
			minimumFractionDigits: 2,
		});
	}
	//Return the symbol
	return symbol;
} // End of currencyChange function

// Exchange Currency Function to convert the currency to the selected currency
function exchangeCurrency(money) {
	if(document.getElementById("currencySelector").value == "CAD") {
		return money;
	} else if(document.getElementById("currencySelector").value == "USD") {
		return money * 0.79;
	} else if(document.getElementById("currencySelector").value == "GBP") {
		return money * 0.59;
	}
}

//8. Add to Cart Function
//Already implemented in the displayCartItems() function above

//9. Remove from Cart Function to remove an item from the cart
function removeFromCart() {
    // Create variables
    var symbol = currencyChange();
    var itemID = document.getElementById("addItemId").value;
    var qtyID = document.getElementById("addItemQty").value;
    var detailOutput = document.getElementById("cartOutput");
    detailOutput.innerHTML = "";

    for (var i = 0; i < cartItems.length; i++) {
        for (var j = 0; j < storeItems.length; j++) {
            if (cartItems[i].id == itemID && storeItems[j].id == itemID && qtyID <= cartItems[i].qty) {
                detailOutput.innerHTML = "";
                cartItems[i].qty -= qtyID;
                var subtotal = cartItems[i].price * cartItems[i].qty;
                detailOutput.innerHTML += cartItems[i].id + " | " + symbol.format(cartItems[i].price) + " | " + cartItems[i].qty + " | " + symbol.format(exchangeCurrency(subtotal)) + "<br>";
                storeItems[j].qtyOnHand += parseInt(qtyID);
                if (cartItems[i].qty < 1) {
                    cartItems.splice(i, 1);
                }
                break;
            }
        }
    }

    if (parseInt(qtyID) < 0) {
        for (var i = 0; i < cartItems.length; i++) {
            for (var j = 0; j < storeItems.length; j++) {
                if (cartItems[i].id == itemID && storeItems[j].id == itemID) {
                    detailOutput.innerHTML = "";
                    storeItems[j].qtyOnHand += parseInt(cartItems[i].qty);
                    cartItems[i].qty = 0;
                    var subtotal = cartItems[i].price * cartItems[i].qty;
                    detailOutput.innerHTML += cartItems[i].id + " | " + symbol.format(cartItems[i].price) + " | " + cartItems[i].qty + " | " + symbol.format(exchangeCurrency(subtotal)) + "<br>";
                    if (cartItems[i].qty < 0) {
                        cartItems.splice(i, 1);
                    }
                    break;
                }
            }
        }
    }

    

}

//10. Review Item Function to display in the item details
function reviewItem() {
	// Create a variable
	var review = document.getElementById("reviewId").value;
	//For each item in the storeItems array, if the review ID matches the item ID, display the item details review
	for(var x = 0; x < storeItems.length; x++) {
		if(review == storeItems[x].id) {
			storeItems[x].reviews = document.getElementById("reviewDesc").value;
			alert("Thank you for your review of Item: " + storeItems[x].name + "!" + ": \n " + "- " + storeItems[x].reviews);
			break;
		}
	}
	for(var x = 0; x < storeItems.length; x++) {
		var ID = storeItems[x].id;
		if(ID == review) {
			break;
		}
	}
	//If the review is for an item that is not in the store, alert the user
	if(ID !== review) {
		alert("Check your items ID!");
	}
} // End of reviewItem function

//11. Validation Function
function validation() {
	// Create variables
	var itemIDCheck = document.getElementById("addItemId").value;
	var outputItemID = document.getElementById("addIDValidationMessage");
	var qtyIDCheck = document.getElementById("addItemQty").value;
	var outputqty = document.getElementById("addQtyValidationMessage");
	outputqty.innerHTML = "";
	// Validate the item ID
	for(var i = 0; i < storeItems.length; i++) {
		if(itemIDCheck == "") {
			// If the item ID is blank, display an error message with bold red text
			outputItemID.innerHTML = "<b><font color='red'>Must enter Item ID!</font></b>";
			//change the background color and border color of the item ID text box.
			document.getElementById("addItemId").style.backgroundColor = "rgba(255, 0, 0, 0.1)";
			document.getElementById("addItemId").style.border = "3px solid red";
		} else if(itemIDCheck !== storeItems[i].id) {
			// If the item ID is not in the store, display an error message with bold red text
			outputItemID.innerHTML = "<b><font color='blue'>Item not found!</font></b>";
			//change the background color and border color of the item ID text box.
			document.getElementById("addItemId").style.backgroundColor = "rgba(0, 0, 255, 0.1)";
			document.getElementById("addItemId").style.border = "3px solid blue";
		} else if(itemIDCheck == storeItems[i].id) {
			outputItemID.innerHTML = "";
			//change the background color and border color of the item ID text box to normal
			document.getElementById("addItemId").style.backgroundColor = "white";
			document.getElementById("addItemId").style.border = "1px solid black";
			break;
		}
	}
	// Validate the quantity
	for(var i = 0; i < storeItems.length; i++) {
		storeItems[i].maxPerCustomer = parseFloat(storeItems[i].maxPerCustomer);
		storeItems[i].qtyOnHand = parseFloat(storeItems[i].qtyOnHand);
		if(storeItems[i].id == itemIDCheck)
			if(qtyIDCheck < 1) {
				// If the quantity is less than 1, display an error message with bold red text
				outputqty.innerHTML = "<b><font color='red'>Qty must be greater than 0!</font></b>";
				//change the background color and border color of the quantity text box
				document.getElementById("addItemQty").style.backgroundColor = "rgba(255, 0, 0, 0.1)";
				document.getElementById("addItemQty").style.border = "3px solid red";
			} 
			else if(qtyIDCheck > storeItems[i].qtyOnHand) {
			// If the quantity is greater than the quantity on hand, display an error message with bold orange text
			outputqty.innerHTML = "<b><font color='orange'>Not enough in stock!</font></b>";
			//change the background color and border color of the quantity text box
			document.getElementById("addItemQty").style.backgroundColor = "rgba(255, 165, 0, 0.1)";
			document.getElementById("addItemQty").style.border = "3px solid orange";
			} 
		else if(qtyIDCheck > storeItems[i].maxPerCustomer) {
			// If the quantity is greater than the maximum per customer, display an error message with bold blue text.
			outputqty.innerHTML = "<b><font color='blue'>Maximum " + storeItems[i].maxPerCustomer + " per customer!</font></b>";
			//change the background color and border color of the quantity text box.
			document.getElementById("addItemQty").style.backgroundColor = "rgba(0, 0, 255, 0.1)";
			document.getElementById("addItemQty").style.border = "3px solid blue";
		} 
		else if(qtyIDCheck <= storeItems[i].qtyOnHand && qtyIDCheck <= storeItems[i].maxPerCustomer) {
			outputqty.innerHTML = "";
			//change the background color and border color of the quantity text box to normal
			document.getElementById("addItemQty").style.backgroundColor = "white";
			document.getElementById("addItemQty").style.border = "1px solid black";
		}
	}
} // End of validation function}

//12.Display Item Details Function
function displayItemDetails() {
	// Create variables
	var symbol = currencyChange();
	var detailCheck = document.getElementById("addItemId").value;
	for(var g = 0; g < storeItems.length; g++) {
		if(detailCheck == storeItems[g].id) {
			alert("Item Details: \nID: " + storeItems[g].id + "\nProduct: Item " + (g + 1) + " \nPrice: " + symbol.format(exchangeCurrency(storeItems[g].price)) + "\nQty Available: " + storeItems[g].qtyOnHand + "\nMax Per Customer: " + storeItems[g].maxPerCustomer + "\nCost of Shipping: " + symbol.format(exchangeCurrency(storeItems[g].shippingCost)) + "\n\nDescription: \n" + storeItems[g].description + "\n\nReviews: \n" + "- " + storeItems[g].reviews);
		}
	}
} // End of displayItemDetails function

//13. Function to change the currencyFlag
function flagChange() {
	var currencySelect = document.getElementById("currencySelector");
	if(currencySelect.value == "USD") {
		document.getElementById("curFlag").src = "pictures/USA_flag.png";
	} else if(currencySelect.value == "GBP") {
		document.getElementById("curFlag").src = "pictures/UK_flag.png";
	} else if(currencySelect.value == "CAD") {
		document.getElementById("curFlag").src = "pictures/Canada_flag.png";
	}
	return flagChange;
} // End of flagChange function