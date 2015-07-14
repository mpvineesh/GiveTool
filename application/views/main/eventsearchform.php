<div class="wpb_row pix-row vc_row-fluid vc_custom_1423312747633 light normal"	style="background-color: #735cb0 !important;">
	<div class="bg-pos-rel">
		<div class="pix-con clearfix">
			<div class="pix-container">
				<div class="vc_col-sm-12 wpb_column vc_column_container ">
					<div class="wpb_wrapper">
						<section class="eventform newsection">
							<div class="event-title"><small>Find what you want</small>
								<h2 class="title">event or compaign</h2>
							</div>
							<div class="eventform-con">
								<form method="post" action="<?php echo $url;?>/index.php/main/searchevent/find">
									<div class="form-input search-location">
										<input name="keyword" type="text" value="" placeholder="Search Keyword" id="event-keyword"> 
										<i class="icon fa fa-search"></i>
									</div>
									<div class="form-input">
										<input name="date" placeholder="mm/dd/yy" class="date_timepicker_start" id="event-name"> 
										<i class="open icon fa fa-calendar"></i>
									</div>
									<div class="form-input">
										<div class="styled-select">
											<select name="location" id="location">
												<option value="">Select Venue</option>
												<?php foreach ($locations as $item)
													{ 
														$sel='';
														echo '<option value="'.$item->str_city.'" '.$sel.'>'.$item->str_city.'</option>';        									
													}
												?>
											  </select>
											 
										</div>
									</div>
									<button name="search" value="1" type="submit" id="searchevent" onclick="return validatesearchfields()" class="btn btn-md btn-pri">find event</button>
								</form>
							</div>
						</section>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>