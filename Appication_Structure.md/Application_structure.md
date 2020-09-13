Component Tree / Componenet Structure

Application State (Data)

Components vs Containders

                        Logo                Builder    orders

    			burger build with diff inlogo

    			Meat   	+ -
    			salad 	+  -
    			chesse	+ -
    			Price: -

    			checkout button


    		-----
    		|App|
    		-----
    		  |
    		--------
    		|Layout|
    		--------
    		  |
    ---------  -----------	  ---------   -----------------
    |Toolbar|  |SideDrawer|   |Backdrop|  |{props.children}|
    ---------  -----------	   --------  -----------------
    |		|														|

|DrawerToggle| |Diffpages|
Logo |BurBuilder|
Navigation Items |Buildcontrols| |Burger| |Modal|
|BuildControl| |Ingredient| |{prop.chil}|
|BuildControl| |Ingredient|
|OrderButton|

State:
Ingredients
{meat:1,cheese:2}

.purchase:true or false
.totalPrice:\$2.99
