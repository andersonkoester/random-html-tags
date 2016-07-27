(function(){

	var htmlTags = ['&lt;!--...--&gt;', '&lt;!DOCTYPE&gt;', '&lt;a&gt;', '&lt;abbr&gt;', '&lt;acronym&gt;', '&lt;address&gt;', '&lt;applet&gt;', '&lt;area&gt;', '&lt;article&gt;', '&lt;aside&gt;', '&lt;audio&gt;', '&lt;b&gt;', '&lt;base&gt;', '&lt;basefont&gt;', '&lt;bdi&gt;', '&lt;bdo&gt;', '&lt;big&gt;', '&lt;blockquote&gt;', '&lt;body&gt;', '&lt;br&gt;', '&lt;button&gt;', '&lt;canvas&gt;', '&lt;caption&gt;', '&lt;center&gt;', '&lt;cite&gt;', '&lt;code&gt;', '&lt;col&gt;', '&lt;colgroup&gt;', '&lt;datalist&gt;', '&lt;dd&gt;', '&lt;del&gt;', '&lt;details&gt;', '&lt;dfn&gt;', '&lt;dialog&gt;', '&lt;dir&gt;', '&lt;div&gt;', '&lt;dl&gt;', '&lt;dt&gt;', '&lt;em&gt;', '&lt;embed&gt;', '&lt;fieldset&gt;', '&lt;figcaption&gt;', '&lt;figure&gt;', '&lt;font&gt;', '&lt;footer&gt;', '&lt;form&gt;', '&lt;frame&gt;', '&lt;frameset&gt;', '&lt;h1&gt; to &lt;h6&gt;', '&lt;head&gt;', '&lt;header&gt;', '&lt;hr&gt;', '&lt;html&gt;', '&lt;i&gt;', '&lt;iframe&gt;', '&lt;img&gt;', '&lt;input&gt;', '&lt;ins&gt;', '&lt;kbd&gt;', '&lt;keygen&gt;', '&lt;label&gt;', '&lt;legend&gt;', '&lt;li&gt;', '&lt;link&gt;', '&lt;main&gt;', '&lt;map&gt;', '&lt;mark&gt;', '&lt;menu&gt;', '&lt;menuitem&gt;', '&lt;meta&gt;', '&lt;meter&gt;', '&lt;nav&gt;', '&lt;noframes&gt;', '&lt;noscript&gt;', '&lt;object&gt;', '&lt;ol&gt;', '&lt;optgroup&gt;', '&lt;option&gt;', '&lt;output&gt;', '&lt;p&gt;', '&lt;param&gt;', '&lt;pre&gt;', '&lt;progress&gt;', '&lt;q&gt;', '&lt;rp&gt;', '&lt;rt&gt;', '&lt;ruby&gt;', '&lt;s&gt;', '&lt;samp&gt;', '&lt;script&gt;', '&lt;section&gt;', '&lt;select&gt;', '&lt;small&gt;', '&lt;source&gt;', '&lt;span&gt;', '&lt;strike&gt;', '&lt;strong&gt;', '&lt;style&gt;', '&lt;sub&gt;', '&lt;summary&gt;', '&lt;sup&gt;', '&lt;table&gt;', '&lt;tbody&gt;', '&lt;td&gt;', '&lt;textarea&gt;', '&lt;tfoot&gt;', '&lt;th&gt;', '&lt;thead&gt;', '&lt;time&gt;', '&lt;title&gt;', '&lt;tr&gt;', '&lt;track&gt;', '&lt;tt&gt;', '&lt;u&gt;', '&lt;ul&gt;', '&lt;var&gt;', '&lt;video&gt;', '&lt;wbr&gt;'];

	var htmlExplanation = ['Defines a comment', 'Defines the document type', 'Defines a hyperlink', 'Defines an abbreviation or an acronym', 'Not supported in HTML5. Use &lt;abbr&gt; instead.Defines an acronym', 'Defines contact information for the author/owner of a document', 'Not supported in HTML5. Use &lt;embed&gt; or &lt;object&gt; instead.Defines an embedded applet', 'Defines an area inside an image-map', 'Defines an article', 'Defines content aside from the page content', 'Defines sound content', 'Defines bold text', 'Specifies the base URL/target for all relative URLs in a document', 'Not supported in HTML5. Use CSS instead.Specifies a default color, size, and font for all text in a document', 'Isolates a part of text that might be formatted in a different direction  from other text outside it', 'Overrides the current text direction', 'Not supported in HTML5. Use CSS instead.Defines big text', 'Defines a section that is quoted from another source', "Defines the document's body", 'Defines a single line break', 'Defines a clickable button', 'Used to draw graphics, on the fly, via scripting (usually JavaScript)', 'Defines a table caption', 'Not supported in HTML5. Use CSS instead.Defines centered text', 'Defines the title of a work', 'Defines a piece of computer code', 'Specifies column properties for each column within a &lt;colgroup&gt; element&nbsp;', 'Specifies a group of one or more columns in a table for formatting', 'Specifies a list of pre-defined options for input controls', 'Defines a description/value of a term in a description list', 'Defines text that has been deleted from a document', 'Defines additional details that the user can view or hide', 'Represents the defining instance of a term', 'Defines a dialog box or window', 'Not supported in HTML5. Use &lt;ul&gt; instead.Defines a directory list', 'Defines a section in a document', 'Defines a description list', 'Defines a term/name in a description list', 'Defines emphasized text&nbsp;', 'Defines a container for an external (non-HTML) application', 'Groups related elements in a form', 'Defines a caption for a &lt;figure&gt; element', 'Specifies self-contained content', 'Not supported in HTML5. Use CSS instead.Defines font, color, and size for text', 'Defines a footer for a document or section', 'Defines an HTML form for user input', 'Not supported in HTML5.Defines a window (a frame) in a frameset', 'Not supported in HTML5.Defines a set of frames', ' Defines HTML headings', 'Defines information about the document', 'Defines a header for a document or section', ' Defines a thematic change in the content', 'Defines the root of an HTML document', 'Defines a part of text in an alternate voice or mood', 'Defines an inline frame', 'Defines an image', 'Defines an input control', 'Defines a text that has been inserted into a document', 'Defines keyboard input', 'Defines a key-pair generator field (for forms)', 'Defines a label&nbsp;for an &lt;input&gt; element', 'Defines a caption for a &lt;fieldset&gt; element', 'Defines a list item', 'Defines the relationship between a document and an external resource (most  used to link to style sheets)', 'Specifies the main content of a document', 'Defines a client-side image-map', 'Defines marked/highlighted text', 'Defines a list/menu of commands', 'Defines a command/menu item that the user can invoke from a popup menu', 'Defines metadata about an HTML document', 'Defines a scalar measurement within a known range (a gauge)', 'Defines navigation links', 'Not supported in HTML5.Defines an alternate content for users that do not support frames', 'Defines an alternate content for users that do not support  client-side scripts', 'Defines an embedded object', 'Defines an ordered list', 'Defines a group of related options in a drop-down list', 'Defines an option in a drop-down list', 'Defines the result of a calculation', 'Defines a paragraph', 'Defines a parameter for an object', 'Defines preformatted text', 'Represents the progress of a task', 'Defines a short quotation', 'Defines what to show in browsers that do not support ruby annotations', 'Defines an explanation/pronunciation of characters (for East Asian  typography)', 'Defines a ruby annotation (for East Asian typography)', 'Defines text that is no longer correct', 'Defines sample output from a computer program', 'Defines a client-side script', 'Defines a section in a document', 'Defines a drop-down list', 'Defines smaller text', 'Defines multiple media resources for media elements (&lt;video&gt; and &lt;audio&gt;)', 'Defines a section in a document', 'Not supported in HTML5. Use &lt;del&gt; or &lt;s&gt; instead.Defines strikethrough text', 'Defines important text', 'Defines style information for a document', 'Defines subscripted text', 'Defines a visible heading for a &lt;details&gt; element', 'Defines superscripted text', 'Defines a table', 'Groups the body content in a table', 'Defines a cell in a table', 'Defines a multiline input control (text area)', 'Groups the footer content in a table', 'Defines a header cell in a table', 'Groups the header content in a table', 'Defines a date/time', 'Defines a title for the document', 'Defines a row in a table', 'Defines text tracks for media elements (&lt;video&gt; and &lt;audio&gt;)', 'Not supported in HTML5. Use CSS instead.Defines teletype text', 'Defines text that should be stylistically different from normal text', 'Defines an unordered list', 'Defines a variable', 'Defines a video or movie', 'Defines a possible line-break' ];

	var htmlLinks = ['tag_comment.asp', 'tag_doctype.asp', 'tag_a.asp', 'tag_abbr.asp', 'tag_acronym.asp', 'tag_address.asp', 'tag_applet.asp', 'tag_area.asp', 'tag_article.asp', 'tag_aside.asp', 'tag_audio.asp', 'tag_b.asp', 'tag_base.asp', 'tag_basefont.asp', 'tag_bdi.asp', 'tag_bdo.asp', 'tag_big.asp', 'tag_blockquote.asp', 'tag_body.asp', 'tag_br.asp', 'tag_button.asp', 'tag_canvas.asp', 'tag_caption.asp', 'tag_center.asp', 'tag_cite.asp', 'tag_code.asp', 'tag_col.asp', 'tag_colgroup.asp', 'tag_datalist.asp', 'tag_dd.asp', 'tag_del.asp', 'tag_details.asp', 'tag_dfn.asp', 'tag_dialog.asp', 'tag_dir.asp', 'tag_div.asp', 'tag_dl.asp', 'tag_dt.asp', 'tag_em.asp', 'tag_embed.asp', 'tag_fieldset.asp', 'tag_figcaption.asp', 'tag_figure.asp', 'tag_font.asp', 'tag_footer.asp', 'tag_form.asp', 'tag_frame.asp', 'tag_frameset.asp', 'tag_hn.asp', 'tag_head.asp', 'tag_header.asp', 'tag_hr.asp', 'tag_html.asp', 'tag_i.asp', 'tag_iframe.asp', 'tag_img.asp', 'tag_input.asp', 'tag_ins.asp', 'tag_kbd.asp', 'tag_keygen.asp', 'tag_label.asp', 'tag_legend.asp', 'tag_li.asp', 'tag_link.asp', 'tag_main.asp', 'tag_map.asp', 'tag_mark.asp', 'tag_menu.asp', 'tag_menuitem.asp', 'tag_meta.asp', 'tag_meter.asp', 'tag_nav.asp', 'tag_noframes.asp', 'tag_noscript.asp', 'tag_object.asp', 'tag_ol.asp', 'tag_optgroup.asp', 'tag_option.asp', 'tag_output.asp', 'tag_p.asp', 'tag_param.asp', 'tag_pre.asp', 'tag_progress.asp', 'tag_q.asp', 'tag_rp.asp', 'tag_rt.asp', 'tag_ruby.asp', 'tag_s.asp', 'tag_samp.asp', 'tag_script.asp', 'tag_section.asp', 'tag_select.asp', 'tag_small.asp', 'tag_source.asp', 'tag_span.asp', 'tag_strike.asp', 'tag_strong.asp', 'tag_style.asp', 'tag_sub.asp', 'tag_summary.asp', 'tag_sup.asp', 'tag_table.asp', 'tag_tbody.asp', 'tag_td.asp', 'tag_textarea.asp', 'tag_tfoot.asp', 'tag_th.asp', 'tag_thead.asp', 'tag_time.asp', 'tag_title.asp', 'tag_tr.asp', 'tag_track.asp', 'tag_tt.asp', 'tag_u.asp', 'tag_ul.asp', 'tag_var.asp', 'tag_video.asp', 'tag_wbr.asp' ];

	var insideTags = {

	};


	insideTags = {
		random: function(){
			var randomNumber = Math.floor((Math.random() * 118));

			var objectReturn = {
				tag: htmlTags[randomNumber],
				explanation: htmlExplanation[randomNumber],
				link: "http://www.w3schools.com/tags/"+htmlLinks[randomNumber]
			};

			return objectReturn;
		}
	}

	window.tags = insideTags;
	return 1;
})();