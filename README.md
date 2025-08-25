WEB103 Prework - Creatorverse
Submitted by: Assol Abasova
About this web app: A content creator management app where users can add, view, edit, and delete their favorite content creators. Each creator includes their name, channel URL, description, and optional image.
Time spent: 2 hours
Required Features
The following required functionality is completed:
<!-- 👉🏿👉🏿👉🏿 Make sure to check off completed functionality below -->

 A logical component structure in React is used to create the frontend of the app
 At least five content creators are displayed on the homepage of the app
 Each content creator item includes their name, a link to their channel/page, and a short description of their content
 API calls use the async/await design pattern via Axios or fetch()
 Clicking on a content creator item takes the user to their details page, which includes their name, url, and description
 Each content creator has their own unique URL
 The user can edit a content creator to change their name, url, or description
 The user can delete a content creator
 The user can add a new content creator by entering a name, url, and description and then it appears in the displayed list

The following optional features are implemented:

 Picocss is used to style HTML elements
 The content creator items are displayed in a creative format, like cards instead of a list
 An image of each content creator is shown on their content creator card

Video Walkthrough
Here's a walkthrough of implemented required features:
<!-- Replace this with whatever GIF tool you used! -->

<!-- 👆🏿 Replace with the relative path to your image file -->
Notes
Describe any challenges encountered while building the app:
The main challenge was debugging the database connection issues. Initially encountered problems with:

Missing Supabase database table
Incorrect column names in the database
Wrong data types (bigint instead of text) for some columns

These were resolved by carefully checking the Supabase database structure and ensuring column names and data types matched exactly what the application expected.
License
Copyright [2025] [Assol Abasova]
Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance with the License. You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software distributed under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for the specific language governing permissions and limitations under the License.
