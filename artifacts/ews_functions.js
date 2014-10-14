/****************************************************************************
* Author: Dennis Maino
* Purpose: To hold common JavaScript functions used by the EWS.
*
* Revision History:
* Date	  Revised by		Description
* ----	  ------------		-----------
* Jun-02  Dennis Maino		Initial create
* Feb-03  Dennis Maino		Updated checkInput and added isPopulated
*
******************************************************************************/
//
/*************************************************************************
*  Name: isEmpty
*
*  Description:	 Function to check if a string is empty
**************************************************************************/
function isEmpty(inputStr)
 {
   if (inputStr == null || inputStr == "")
    {
      return true
    }
   return false
 } 

//********************************************
// Name: allBlank
//
// Description: This function checks for a
//  string that contains all blank spaces.
//********************************************
function allBlank(stringIn)
 {
   strLen = stringIn.length;

   for (t = 0; t < strLen; t++)
    {
      if (stringIn.charAt(t) != " ")
       {
	 return false;
       }
    } // End For
   return true;
 }

/*************************************************************************
*  Name: isPopulated
*
*  Description:	 Function to check if an input field is empty
**************************************************************************/
function isPopulated(inputObj)
 {
   if (((inputObj.type=="file" || inputObj.type=="text" || inputObj.type=="textarea") &&
      isEmpty(inputObj.value) || allBlank(inputObj.value)) ||
      (inputObj.type.toString().charAt(0)=="s" && inputObj.selectedIndex==0))
    {
      return false;
    }
    return true;
 }

//********************************************
// Name: checkInput
//
// Description: This function validates required
//  input fields are filled in by the user.
//  If not - alert mesage is displayed.
//  Function also validates input is entered
//  in any input field (even if not required).
//  If not - returns false to not let form submit.
//
//********************************************
function checkInput(form)
 {
   var pass=true;
   var tempobj;
   if (document.images)
    {
      for (i=0; i<form.length; i++)
       {
	 tempobj=form.elements[i];

         if (tempobj.type == "hidden")
            continue;

	 if (tempobj.name.substring(0,8)=="required")
	  {
            if (!isPopulated(tempobj))
	     {
		pass=false;
		break;
	     }
	  }
         else
          {
            // at end of input fields check - get out
            if (tempobj.type=="submit")
             {
               break;
             }
            // determine if input field is populated
            if (isPopulated(tempobj))
	     {
		pass=true;
                break;
             }
            else
	     {
		pass=false;
             }
          }
       } // end of for (i=0; i<form.length; i++)
    } // end of if (document.images)
   if (!pass)
    {
      if (tempobj.name.substring(0,8)=="required")
       {
         shortFieldName=tempobj.name.substring(8,30).toUpperCase();
         alert("Please fill in the " + shortFieldName + " field.");
         tempobj.focus();
       }
      return false;
    }
   else
      return true;
 }

