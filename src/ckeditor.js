/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import BalloonEditorBase from '@ckeditor/ckeditor5-editor-balloon/src/ballooneditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import BlockToolbar from '@ckeditor/ckeditor5-ui/src/toolbar/block/blocktoolbar';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/Underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/Strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/Code';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
// import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';
import Autosave from '@ckeditor/ckeditor5-autosave/src/autosave';
import Mention from '@ckeditor/ckeditor5-mention/src/mention';
import PendingActions from '@ckeditor/ckeditor5-core/src/pendingactions';
import CodeBlock from '@ckeditor/ckeditor5-code-block/src/codeblock';
import TextTransformation from '@ckeditor/ckeditor5-typing/src/texttransformation';

import '../theme/theme.css';

export default class BalloonEditor extends BalloonEditorBase {}

// Plugins to include in the build.
BalloonEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	BlockToolbar,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	Link,
	List,
	// MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	Autosave,
	Mention,
	PendingActions,
	CodeBlock,
	TextTransformation
];

// Editor configuration.
BalloonEditor.defaultConfig = {
	blockToolbar: [
		'heading',
		'|',
		'bulletedList',
		'numberedList',
		'imageUpload',
		'blockQuote',
		'insertTable',
		'codeBlock'
		// 'mediaEmbed',
		// '|',
		// 'undo',
		// 'redo'
	],
	toolbar: {
		items: [
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'link'
		]
	},
	image: {
		toolbar: [
			// 'imageStyle:full',
			// 'imageStyle:side',
			// '|',
			'imageTextAlternative'
		]
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	codeBlock: {
		languages: [
			{ language: 'plaintext', label: 'Plain text' }, // The default language.
			{ language: 'c', label: 'C' },
			{ language: 'cs', label: 'C#' },
			{ language: 'cpp', label: 'C++' },
			{ language: 'css', label: 'CSS' },
			{ language: 'diff', label: 'Diff' },
			{ language: 'xml', label: 'HTML/XML' },
			{ language: 'java', label: 'Java' },
			{ language: 'javascript', label: 'JavaScript' },
			{ language: 'php', label: 'PHP' },
			{ language: 'python', label: 'Python' },
			{ language: 'ruby', label: 'Ruby' },
			{ language: 'typescript', label: 'TypeScript' }
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
