# Displaying UFO Data with JavaScript

Dana is a journalist who wants to publish an online article with her researach on UFOs. In addition to the website, she'd like to display her data as a table with filters alongside her article to help support her positions. This project uses HTML and JavaScript to create the webpage and table, as well as filter her data by date, location, and shape of the UFO.

## How to Use the UFO Table
Beneath Dana's article is the UFO table. The filters are on the left side, and when a filter is typed in, it will filter the table on the right. The entire table displays by default.

![One_Filter](https://github.com/kaileymd/UFOs/blob/main/static/images/One_Filter.png)

The filters are cumulative, meaning that as each filter is added, it continues to narrow down the available options. If we added a UFO shape filter to the previous example, it will filter by date AND UFO shape:

![Two_Filters](https://github.com/kaileymd/UFOs/blob/main/static/images/Two-Filters.png)

The filters can be used in any order and combination, however, the text has to match exactly for any results to show. For example, in the date field simply searching "2010" will not display any results because it needs to be an exact date. Similarly, 'California' will not display any results, and neither will 'CA' - it needs to match exactly, so the State field will only filter on lowercase abbreviations of state names.

The Comments column does not have a filter at this time.


## Summary
While this project accomplishes Dana's needs, it is not an optimized website. **All** of her data is displayed in the table, no matter how many rows of data she may have. If she decided to further support her article with even more data points, the webpage would become very long and information intensive due to the size of her table. This would reduce the speed at which her website loads, make the table hard to use, and the table even less mobile friendly than it already is.

If Dana intends to improve or otherwise continue use of this webiste, I would recommend:
- research and implementation of table pagination to reduce the amount of information displayed by the table at a singule time without compromising the amount of data or webpage loading time
-  research and implementation of sorting by column for the table
-  more distinctive sections/separation between the article and the table to improve the visual quality of the website
