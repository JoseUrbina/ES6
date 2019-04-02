<?php
	
class Render
{
	protected $data;
	protected $built;

	function __construct()
	{
		$data = array();
		$built = "";
	}

	public function words(array $Words)
	{
		foreach($Words as $value)
		{
			$this->data[] = $value;
		}

		return $this;
	}

	public function builtPhrase($conector)
	{
		foreach($this->data as $value)
		{
			$this->built .= $value . $conector;
		}

		$this->built =	substr($this->built, 0, (strlen($this->built) - 1));

		return $this;
	}

	public function get()
	{
		return $this->built;
	}
}