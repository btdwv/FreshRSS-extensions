<?php

declare(strict_types=1);

class ScrollToSelectedFeedExtension extends Minz_Extension
{
	public function init(): void {
		Minz_View::appendScript($this->getFileUrl('script.js', 'js'));
	}
}
