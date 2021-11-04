# README

# Resources
/rails/info/routes
|Prefix                                   |Verb   |URI Pattern                                                                                       |Controller#Action      |
|-----------------------------------------|-------|--------------------------------------------------------------------------------------------------|-----------------------|
|                              apartments |GET    |/apartments(.:format)                                                                             |apartments#index|
|                                         |POST   |/apartments(.:format)                                                                             |apartments#create|
|                           new_apartment |GET    |/apartments/new(.:format)                                                                         |apartments#new|
|                          edit_apartment |GET    |/apartments/:id/edit(.:format)                                                                    |apartments#edit|
|                               apartment |GET    |/apartments/:id(.:format)                                                                         |apartments#show|
|                                         |PATCH  |/apartments/:id(.:format)                                                                         |apartments#update|
|                                         |PUT    |/apartments/:id(.:format)                                                                         |apartments#update|
|                                         |DELETE |/apartments/:id(.:format)                                                                         |apartments#destroy|
|                        new_user_session |GET    |/users/sign_in(.:format)                                                                          |devise/sessions#new|
|                            user_session |POST   |/users/sign_in(.:format)                                                                          |devise/sessions#create|
|                    destroy_user_session |GET    |/users/sign_out(.:format)                                                                         |devise/sessions#destroy|
|                       new_user_password |GET    |/users/password/new(.:format)                                                                     |devise/passwords#new|
|                      edit_user_password |GET    |/users/password/edit(.:format)                                                                    |devise/passwords#edit|
|                           user_password |PATCH  |/users/password(.:format)                                                                         |devise/passwords#update|
|                                         |PUT    |/users/password(.:format)                                                                         |devise/passwords#update|
|                                         |POST   |/users/password(.:format)                                                                         |devise/passwords#create|
|                cancel_user_registration |GET    |/users/cancel(.:format)                                                                           |devise/registrations#cancel|
|                   new_user_registration |GET    |/users/sign_up(.:format)                                                                          |devise/registrations#new|
|                  edit_user_registration |GET    |/users/edit(.:format)                                                                             |devise/registrations#edit|
|                       user_registration |PATCH  |/users(.:format)                                                                                  |devise/registrations#update|
|                                         |PUT    |/users(.:format)                                                                                  |devise/registrations#update|
|                                         |DELETE |/users(.:format)                                                                                  |devise/registrations#destroy|
|                                         |POST   |/users(.:format)                                                                                  |devise/registrations#create|
|                                         |GET    |/*path(.:format)                                                                                  |home#index|
|                                    root |GET    |/                                                                                                 |home#index|
|           rails_postmark_inbound_emails |POST   |/rails/action_mailbox/postmark/inbound_emails(.:format)                                           |action_mailbox/ingresses/postmark/inbound_emails#create|
|              rails_relay_inbound_emails |POST   |/rails/action_mailbox/relay/inbound_emails(.:format)                                              |action_mailbox/ingresses/relay/inbound_emails#create|
|           rails_sendgrid_inbound_emails |POST   |/rails/action_mailbox/sendgrid/inbound_emails(.:format)                                           |action_mailbox/ingresses/sendgrid/inbound_emails#create|
|     rails_mandrill_inbound_health_check |GET    |/rails/action_mailbox/mandrill/inbound_emails(.:format)                                           |action_mailbox/ingresses/mandrill/inbound_emails#health_check|
|           rails_mandrill_inbound_emails |POST   |/rails/action_mailbox/mandrill/inbound_emails(.:format)                                           |action_mailbox/ingresses/mandrill/inbound_emails#create|
|            rails_mailgun_inbound_emails |POST   |/rails/action_mailbox/mailgun/inbound_emails/mime(.:format)                                       |action_mailbox/ingresses/mailgun/inbound_emails#create|
|          rails_conductor_inbound_emails |GET    |/rails/conductor/action_mailbox/inbound_emails(.:format)                                          |rails/conductor/action_mailbox/inbound_emails#index|
|                                         |POST   |/rails/conductor/action_mailbox/inbound_emails(.:format)                                          |rails/conductor/action_mailbox/inbound_emails#create|
|       new_rails_conductor_inbound_email |GET    |/rails/conductor/action_mailbox/inbound_emails/new(.:format)                                      |rails/conductor/action_mailbox/inbound_emails#new|
|      edit_rails_conductor_inbound_email |GET    |/rails/conductor/action_mailbox/inbound_emails/:id/edit(.:format)                                 |rails/conductor/action_mailbox/inbound_emails#edit|
|           rails_conductor_inbound_email |GET    |/rails/conductor/action_mailbox/inbound_emails/:id(.:format)                                      |rails/conductor/action_mailbox/inbound_emails#show|
|                                         |PATCH  |/rails/conductor/action_mailbox/inbound_emails/:id(.:format)                                      |rails/conductor/action_mailbox/inbound_emails#update|
|                                         |PUT    |/rails/conductor/action_mailbox/inbound_emails/:id(.:format)                                      |rails/conductor/action_mailbox/inbound_emails#update|
|                                         |DELETE |/rails/conductor/action_mailbox/inbound_emails/:id(.:format)                                      |rails/conductor/action_mailbox/inbound_emails#destroy|
|new_rails_conductor_inbound_email_source |GET    |/rails/conductor/action_mailbox/inbound_emails/sources/new(.:format)                              |rails/conductor/action_mailbox/inbound_emails/sources#new|
|   rails_conductor_inbound_email_sources |POST   |/rails/conductor/action_mailbox/inbound_emails/sources(.:format)                                  |rails/conductor/action_mailbox/inbound_emails/sources#create|
|   rails_conductor_inbound_email_reroute |POST   |/rails/conductor/action_mailbox/:inbound_email_id/reroute(.:format)                               |rails/conductor/action_mailbox/reroutes#create|
|                      rails_service_blob |GET    |/rails/active_storage/blobs/redirect/:signed_id/*filename(.:format)                               |active_storage/blobs/redirect#show|
|                rails_service_blob_proxy |GET    |/rails/active_storage/blobs/proxy/:signed_id/*filename(.:format)                                  |active_storage/blobs/proxy#show|
|                                         |GET    |/rails/active_storage/blobs/:signed_id/*filename(.:format)                                        |active_storage/blobs/redirect#show|
|               rails_blob_representation |GET    |/rails/active_storage/representations/redirect/:signed_blob_id/:variation_key/*filename(.:format) |active_storage/representations/redirect#show|
|         rails_blob_representation_proxy |GET    |/rails/active_storage/representations/proxy/:signed_blob_id/:variation_key/*filename(.:format)    |active_storage/representations/proxy#show|
|                                         |GET    |/rails/active_storage/representations/:signed_blob_id/:variation_key/*filename(.:format)          |active_storage/representations/redirect#show|
|                      rails_disk_service |GET    |/rails/active_storage/disk/:encoded_key/*filename(.:format)                                       |active_storage/disk#show|
|               update_rails_disk_service |PUT    |/rails/active_storage/disk/:encoded_token(.:format)                                               |active_storage/disk#update|
|                    rails_direct_uploads |POST   |/rails/active_storage/direct_uploads(.:format)                                                    |active_storage/direct_uploads#create|
# Apartment App Challenge

As a developer, I have been commissioned to create an application for managing and viewing apartment rentals.  
The application has two kinds of users: unregistered users who can look at apartment listings and registered users who can create listings for apartments available for rent.  
Apartment listings have a street designation, city, state, a manager's name, manager's contact email, monthly rental price, number of bedrooms, number of bathrooms, and whether they allow pets.
If my work is acceptable to my client, I may also be asked to add the ability for a registered user to remove an apartment from the list as well as edit the apartment information.



## User Stories
**Story:** As an unregistered user, I can go to the web application and see a home page with information about the application, a header element, and a footer element.

**Story:** As an unregistered user, I can see the navigation options for a page with all the apartment listings, a page where I can create an account, and always get back to the home page.

**Story:** As an unregistered user, I can navigate to a page that shows me a list of all the apartments available for rent.

**Story:** As an unregistered user, I can select one available apartment and view its details.

**Story:** As a user, I can register to create an account on the web application, login to my existing account, and logout.

**Story:** As a logged in user, I can see a list of all the apartments I have available for rent.

**Story:** As a logged in user, I can fill out a form that will allow me to create a new listing of an apartment.

**Story:** (STRETCH) As a logged in user, I can edit the information for the apartments I have created, but I cannot edit the information for apartments created by someone else.

**Story:** (STRETCH) As a logged in user, I can delete an apartment I have created, but I cannot delete apartments created by someone else.

