class Calculator
{
	constructor(id)
	{
		this.textID = id;
		this.string = "";
	}
	
	update()
	{
		document.getElementById(this.textID).innerHTML = this.string;
	}
	
	addSign(c)
	{
		this.string += c;
		this.update();
	}
	
	checkSign()
	{
		if (this.string.length > 0 && isNaN(this.string[this.string.length - 1]))
		{
			this.string = this.string.slice(0, -1);
			return true;
		}
		return false;
	}
	
	addPlusMinus(c)
	{
		this.checkSign();
		this.addSign(c);
	}
	
	addMultiplyDivide(c)
	{
		this.checkSign();
		this.addSign(c);
	}
	
	remove()
	{
		this.string = this.string.slice(0, -1);
		this.update();
	}
	
	clearData()
	{
		this.string = "";
		this.update();
	}
	
	addOpeningBracket()
	{
		if (!isNaN(this.string[this.string.length - 1]))
			this.addSign('*');
		this.addSign('(');
	}
	
	addClosingBracket()
	{
		if (this.checkBrackets() > 0 && !isNaN(this.string[this.string.length - 1]))
			this.addSign(')');
	}
	
	checkBrackets()
	{
		let check = 0;
		
		for (let i = 0; i < this.string.length; i++)
		{
			if (this.string[i] === '(')
				check++;
			if (this.string[i] === ')')
				check--;
		}
		
		return check;
	}
	
	result()
	{
		this.string = eval(this.string);
		this.update();
		this.string = "";
	}
}