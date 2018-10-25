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
            return this[0].toLowerCase() + this.substring(1);
        }
    });

    Object.defineProperty(String.prototype, 'firstCharToUpperCase',
    {
        enumerable: false,
        value: function (str)
        {
            return this[0].toUpperCase() + this.substring(1);
        }
    });
}
