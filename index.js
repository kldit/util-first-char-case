/**
 * @author Orlando Leite
 *
 * util functions
 */
if(!String.prototype.firstCharToLowerCase)
{
    Object.defineProperty(String.prototype, 'firstCharToLowerCase',
    {
        enumerable: false,
        value: function ()
        {
            if( this.length > 0 )
                return this[0].toLowerCase() + this.substring(1);
            else
                return "";
        }
    });

    Object.defineProperty(String.prototype, 'firstCharToUpperCase',
    {
        enumerable: false,
        value: function (str)
        {
            if( this.length > 0 )
                return this[0].toUpperCase() + this.substring(1);
            else
                return "";
        }
    });
}
