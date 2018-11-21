/* eslint-disable */module.exports={languageData:{"plurals":function(n,ord){var s=String(n).split("."),v0=!s[1],t0=Number(s[0])==n,n10=t0&&s[0].slice(-1),n100=t0&&s[0].slice(-2);if(ord)return n10==1&&n100!=11?"one":n10==2&&n100!=12?"two":n10==3&&n100!=13?"few":"other";return n==1&&v0?"one":"other"}},messages:{"alpha.footer.feedback":"Tell us if something went wrong at <a href=\"https://feedback.caliopen.org/\">https://feedback.caliopen.org/</a>.","app-loader.action.retry":"Please click here to retry","app-loader.activity.cats":"Feeding the cats, wait a moment please","app-loader.activity.chicken":"Telling the chicken to get out from the kitchen, wait a moment please","app-loader.activity.macaroons":"Baking macaroons, wait a moment please","app-loader.feedback.failure":"Something went wrong. Are you offline ?","app.notification.new_messages":function(a){return["You received ",a("0")," new messages"]},"application_switcher.action.choose":"Choose","auth.feedback.deauth":"You are not authenticated anymore. Please reconnect.","call-to-action.action.compose":"Compose","call-to-action.action.compose_contact":"Compose to this contact","call-to-action.action.create_contact":"Create a contact","call-to-action.action.reply":"Reply","collection-field-group.action.add":"Add","confirm.action.cancel":"Cancel","confirm.action.confirm":"Yes I'm sure","contact-book.action.add":"Add","contact-book.action.delete":"Delete","contact-book.action.import":"Import","contact-book.action.manage-tags":"Manage tags","contact-book.action.select":"Select the contact","contact-book.action.select-all":"Select all","contact-book.action.start-discussion":"Start a discussion","contact-book.confirm-delete.content":function(a){return[a("count","plural",{one:" The deletion is permanent, are you sure you want to delete this contact ? ",other:" The deletion is permanent, are you sure you want to delete these contacts ? "})]},"contact-book.confirm-delete.title":function(a){return[a("count","plural",{one:"Delete contact",other:"Delete contacts"})]},"contact-book.contacts.selected":function(a){return[a("count","plural",{one:["#","/",a("totalCount")," selected contact:"],other:["#","/",a("totalCount")," selected contacts:"]})]},"contact-book.contacts.title":"Contacts","contact-book.groups.title":"Groups","contact-book.tags.action.edit-groups":"Edit groups","contact.action-bar.label":"Contact:","contact.action.add-identity":"Add an identity","contact.action.add-organization":"Add an organization","contact.action.add_new_field":"Add new","contact.action.cancel_edit":"Cancel","contact.action.delete_contact":"Delete","contact.action.edit_contact":"Edit contact","contact.action.edit_tags":"Edit tags","contact.action.share_contact":"Share","contact.action.validate_edit":"Validate","contact.address_form.city.label":"City","contact.address_form.country.label":"Country","contact.address_form.legend":"Postal address","contact.address_form.postal_code.label":"Postal code","contact.address_form.region.label":"Region","contact.address_form.select_country":"Select a country","contact.address_form.select_region":"Select a region","contact.address_form.street.label":"Street","contact.address_form.type.label":"Type","contact.address_type.home":"Personal","contact.address_type.other":"Other","contact.address_type.work":"Professional","contact.confirm-delete.content":"The deletion is permanent, are you sure you want to delete this contact ?","contact.confirm-delete.title":"Delete the contact","contact.contact-details.title":"Contact details","contact.contact_details":"Contact details","contact.contact_identities":"Social identity","contact.contact_organizations":"Professional","contact.edit_contact.title":"Edit contact","contact.email_form.address.label":"Address","contact.email_form.legend":"Email","contact.email_form.type.label":"Type","contact.email_type.home":"Personal","contact.email_type.other":"Other","contact.email_type.work":"Professional","contact.feedback.unable_to_save":"Unable to save the contact","contact.form-selector.add_new_field.label":"Add a new field","contact.form-selector.address_form.label":"Address","contact.form-selector.email_form.label":"Email","contact.form-selector.im_form.label":"IM","contact.form-selector.phone_form.label":"Phone","contact.identities":"Identities","contact.identity_form.identity.label":"Identity","contact.identity_form.identity.placeholder":"@username, account's URL...","contact.identity_form.legend":"Identities","contact.identity_form.service.label":"Service","contact.im_form.address.label":"Address","contact.im_form.legend":"Instant messaging","contact.im_form.type.label":"Type","contact.im_type.home":"Personal","contact.im_type.netmeeting":"Netmeeting","contact.im_type.other":"Other","contact.im_type.work":"Professional","contact.keys.title":"Public keys","contact.last-messages.title":"Last messages","contact.orga_form.department.label":"Department","contact.orga_form.job_description.label":"Position","contact.orga_form.label.label":"Label","contact.orga_form.legend":"Organization","contact.orga_form.name.label":"Organization's name","contact.orga_form.title.label":"Title","contact.organization":"Organization","contact.organizations":"Organizations:","contact.phone_form.legend":"Phone","contact.phone_form.number.label":"Number","contact.phone_form.type.label":"Type","contact.phone_type.home":"Home","contact.phone_type.other":"Other","contact.phone_type.work":"Work","contact.primary":"Primary","contact.profile.name_not_set":"(N/A)","contact.public_key_form.cancel":"Cancel","contact.public_key_form.confirm_delete.content":function(a){return["Are you sure you want to delete the key \"",a("label")," - ",a("fingerprint"),"\" ? This action cannot be undone."]},"contact.public_key_form.confirm_delete.title":"Delete public key","contact.public_key_form.delete_key":"Delete Key","contact.public_key_form.key.label":"Key content","contact.public_key_form.label.label":"Public keys","contact.public_key_form.legend":"Public Key","contact.public_key_form.validate":"Validate","contact.public_keys_list.add_key.label":"Add public key","contact_profile.action.edit_contact":"Edit","contact_profile.form.birthday.label":"Birthday","contact_profile.form.firstname.label":"Firstname","contact_profile.form.lastname.label":"Lastname","contact_profile.form.name-prefix.label":"Prefix","contact_profile.form.name-suffix.label":"Suffix","contact_profile.form.title.label":"Title","contacts-filters.format-view.firstname":"Firstname, Lastname","contacts-filters.format-view.label":"Format name view","contacts-filters.format-view.name":"Lastname, Firstname","contacts-filters.order-by.label":"Order by","desktop.notification.new_messages":function(a){return["You received ",a("0")," new messages"]},"device.action.delete":"Delete","device.action.revoke":"Revoke this device","device.action.save_changes":"Save modifications","device.action.verify":"Verify this device","device.current_device":"Current device","device.feedback.invalid_ip":"IP or subnet address is invalid.","device.feedback.revoke_success":"The device has been revoked","device.feedback.save_success":"The device has been saved","device.form.locations.address.label":"IP or subnet mask","device.form.locations.type.label":"Connection location","device.info.date_insert":"Insert date","device.info.last_seen":"Last connection","device.info.last_verified_device":"The last verified device can not be revoked.","device.info.os":"Operating System","device.info.os-version":"Version","device.info.other_device":"You need a verified device to revoke this one.","device.info.title":"Device informations","device.location.type.home":"Home","device.location.type.public":"Public","device.location.type.unknown":"Unkown","device.location.type.work":"Work","device.manage.descr":"Here you can manage your device allowed to connect to your Caliopen account, set restrictions on some IP addresses and custom the name of your device to better identify it later.","device.manage.title":"Manage Your device","device.manage_form.ips.infotext":"Restrict the access of your account to certain IP addresses for this device. (e.g. 192.168.10 or 192.168.1.1/24 or 192.168.1.1-20)","device.manage_form.ips.label":"IP or subnet address","device.manage_form.name.infotext":"This is the name which allows you to identify your device everywhere.","device.manage_form.name.label":"Name:","device.manage_form.type.infotext":"You can select the type of your device: smartphone, tablet, laptop or desktop.","device.manage_form.type.label":"Type:","device.no-selected-device":"No selected device","device.revoke.descr":"Please be careful about this section! This operation will delete this device which will be unable to access to your Caliopen account in the future.","device.revoke.title":"Revoke this device","device.revoke_info":"You can prevent this device to connect to your account in the future.","device.type.desktop":"Desktop","device.type.laptop":"Laptop","device.type.other":"Other","device.type.smartphone":"Smartphone","device.type.tablet":"Tablet","device.verify.descr":"You need to verify this device to allow it to access to your Caliopen account. Please note that this action can have an impact on your Privacy Index according to the device information and settings. You'll find below some informations about the device which tried to connect to your Caliopen account.","device.verify.not-you":"It's not you?","device.verify.title":"Verify you device","devices.feedback.unverified_device":"You are connected on an unverified device.","devices.feedback.unverified_device_more":"To respect privacy and security rules, your discussions history will not fully appear<0/> Please verify this device from a trusted one.","discussion.action.label":"Whole discussion","discussion.action.reply":"Reply","draft.action.import_attachement":"Import attachement","draft.attachement.form.descr":"Attach a file.","draft.feedback.save-error":"Unable to save the draft","draft.feedback.saved":"Draft saved","draft.feedback.send-error":"Unable to send the message","draftmessage.reply-not-available-except-email":"Replying to a Twitter DM will be available soon. Thank you for your patience.","file.size.B":function(a){return[a("size")," B"]},"file.size.gB":"<0/> gB","file.size.kB":"<0/> kB","file.size.mB":"<0/> mB","file.size.tB":"<0/> tB","general.action.cancel":"Cancel","general.action.load_more":"Load more","header.actions.search":"Search","header.menu.account":"Account","header.menu.contacts":"Contacts","header.menu.discussions":"Messages","header.menu.search":"Search","header.menu.settings":"Settings","header.menu.signin":"Signin","header.menu.signout":"Signout","header.menu.toggle-navigation":"Toggle navigation","header.menu.toggle-search-form":"Toggle search form","import-contact.action.import":"Import","import-contact.action.import_contacts":"Import contacts","import-contact.feedback.error-contact":"The file is valid but new contacts cannot be created","import-contact.feedback.error-file":"This file cannot be used to import contacts","import-contact.feedback.successfull":"Contacts successfully imported","import-contact.feedback.unexpected-error":"An unexpected error occured.","import-contact.form.button.close":"Close","import-contact.form.descr":"You can import one .vcf or .vcard file.","import-contact.form.success":"Successfuly imported !","input-file-group.error.file_is_required":"A file is required","input-file-group.error.max_size":"The file size must be under <0/>","input-file-group.error.no_valid_ext":function(a){return["Only files ",a("0")]},"input-file-group.file.size":function(a){return[a("size")," kB"]},"input-file.add_a_file.label":"Add a file","login.details.action.change":"Change your login","login.details.label":"login","login.details.title":"Login:","message-item.action.delete":"Delete","message-item.action.manage_tags":"Manage tags","message-item.action.reply":"Reply","message-list.action.copy-to":"Copy to","message-list.action.delete":"Delete","message-list.action.reply":"Reply","message-list.action.select_all_discussions":"Select/deselect all discussions","message-list.action.select_all_messages":"Select/deselect all messages","message-list.action.select_single_message":"Select/deselect this message","message-list.confirm-delete.content":"The deletion is permanent, are you sure you want to delete the messages including eventual drafts ?","message-list.confirm-delete.title":"Delete the discussion","message-list.message.action.collapse":"Collapse","message-list.message.action.copy-to":"Copy to","message-list.message.action.delete":"Delete","message-list.message.action.expand":"Expand","message-list.message.action.mark_as_read":"Mark as read","message-list.message.action.mark_as_unread":"Mark as unread","message-list.message.action.reply":"Reply","message-list.message.action.tags":"Tags","message-list.message.by":function(a){return["by ",a("messageType")]},"message-list.message.confirm-delete.content":"The deletion is permanent, are you sure you want to delete this message ?","message-list.message.confirm-delete.title":"Delete a message","message-list.message.from":"From:","message-list.message.new":"new","message-list.message.pi":"Privacy Index","message-list.message.protocol.email":"email","message-list.message.received-on":"received on","message-list.message.selected":function(a){return[a("0","plural",{one:[a("count"),"/",a("totalCount")," message :"],other:[a("count"),"/",a("totalCount")," messages :"]})]},"message-list.message.to":"To:","message-list.message.to-me-nb":function(a){return[a("0","plural",{0:"To: You",1:"To: You and 1 other person",other:["To: You and ","#"," other persons"]})]},"message-list.message.to-nb":function(a){return[a("1","plural",{0:"To:",1:["To: ",a("0")],other:["To: ","#"," persons"]})]},"message-list.today":"Today","message.compose.action.delete_attachement":"Delete the attachment","message.compose.action.open_import_attachements":"Add an attachement","message.compose.confirm-send.confirm-button":"Yes, just do it!","message.compose.confirm-send.content":"Some fields are empty (subject and/or body). Send this message anyway ?","message.feedbak.update_fail":"Update failed","message.from":"De\u202F:","message.participants.me":"Me","message.pi.comportment":"Sender","message.pi.context":"Departure","message.pi.description.metaphor.bad":"In real life this message would be somewhat equivalent to a postal card visible by everyone.","message.pi.description.metaphor.good":"In real life this message would be somewhat equivalent to letter within an envelope.","message.pi.description.metaphor.super":"In real life, this message would be somewhat equivalent to a sealed letter carried by a reliable messenger.","message.pi.description.metaphor.ugly":"In real life this message would be somewhat equivalent to a postal card visible by everyone.","message.pi.technic":"Travel","message.to":"\xC0\u202F:","messages.compose.action.copy":"Copy to","messages.compose.action.remove-recipient":"Remove recipient","messages.compose.action.save":"Save","messages.compose.action.send":"Send","messages.compose.confirm-send.title":"Send a message","messages.compose.form.body.label":"Type your message here...","messages.compose.form.body.placeholder":"Type your message here...","messages.compose.form.subject.label":"Subject","messages.compose.form.to.label":"To","messages.participants.and_x_others":function(a){return[a("first")," and ",a("number","plural",{one:["#"," other"],other:["#"," others"]})]},"navigation.actions.toggle-importance-level-slider":"Toggle Importance Level selection","navigation.actions.toggle-timeline-filter":"Toggle timeline filters","new-device-info.i-understand":"I understand","new-device-info.learn-more":"Learn more","new-device-info.learn-more.content":"<p>In order to compute the Privacy Index (PI) of a message, Caliopen needs to know more about the terminal you're using to consult said message: by nature a laptop isn't as private as a desktop (since you will be using your laptop in public more often).</p><p>Likewise a shared terminal (e.g. a free access computer in a public place) cannot be considered as private as your personal computer only you use.</p><p>Caliopen will take into account the informations you enter on the next screen, to better assess whether your more private messages can be displayed without a risk to be read by a third party: by default only the messages adapted to your terminal's privacy will be displayed.</p><p>It is therefore important to precisely describe a terminal's attributes on the first use, so that Caliopen can more effectively protect your privacy.</p>","new-device-info.modal.title":"About new device","new-device-info.text":"To respect privacy and security rules, your discussion history will not appear here for now. Please verify this device and eventually set restrictions from your trust client to use Caliopen on this client.","new-device-info.title":"It's the first time you attemp to connect to your Caliopen account on this client.","openpgp.action.remove-key":"Remove","openpgp.action.toggle-details":"Toggle details","openpgp.details.algorithm":"Algorithm","openpgp.details.creation":"Creation","openpgp.details.expiration":"Expiration","openpgp.details.identities":"Identities","openpgp.details.key-size":"Key size","openpgp.details.status":"Status","openpgp.feedback.fingerprints-not-match":"Fingerprints do not match","openpgp.feedback.unable-read-private-key":"Unable to read private key","openpgp.feedback.unable-read-public-key":"Unable to read public key","openpgp.private-key":"Private key","openpgp.public-key":"Public key","openpgp.status.expired":"Expired","openpgp.status.invalid":"Invalid","openpgp.status.no_self_cert":"No self cert","openpgp.status.revoked":"Revoked","openpgp.status.valid":"Valid","orga-details.job.desc-full":function(a){return[a("jobDesc")," at ",a("orgaName")," ",a("department")]},"page_not_found.caliopen-ascii":"Caliopen is draw using ASCIi art","page_not_found.caliopen-ascii-logo":"Logo of Caliopen in ASCIi art","page_not_found.page_title":"Page not found","page_not_found.thank_you":"Thank you for using","page_not_found.title":"Unicorn not found","password.action.go_signin":"Signin","password.details.action.change":"Change","password.details.password_strength.title":"Password strength:","password.forgot-form.action.login":"Ok","password.forgot-form.action.send":"Send","password.forgot-form.cancel":"Cancel","password.forgot-form.instructions":"Enter your username and we'll email instructions on how to reset your password.","password.forgot-form.recovery_email.label":"Recovery email","password.forgot-form.recovery_email.placeholder":"example@domain.tld","password.forgot-form.success":"Done! You will receive an email shortly with instructions to reset your password.","password.forgot-form.title":"Forgot password","password.forgot-form.username.label":"Username","password.forgot-form.username.placeholder":"username","password.form.action.cancel":"Cancel","password.form.action.validate":"Apply modifications","password.form.current_password.label":"Current password:","password.form.current_password.placeholder":"Enter your current password","password.form.current_password.tip":"The password you want to replace.","password.form.feedback.error-old-password":"Wrong old password.","password.form.feedback.successfull":"Password updated!","password.form.feedback.unexpected-error":"Error when updating password.","password.form.new_password.label":"New password:","password.form.new_password.placeholder":"Password","password.form.new_password.tip":"The password you want to use from now.","password.form.new_password_confirmation.error":"Passwords don't match","password.form.new_password_confirmation.label":"New password confirmation:","password.form.new_password_confirmation.placeholder":"Password","password.form.tfa.label":"TOTP validation code:","password.form.tfa.placeholder":"Enter the 2-auth code","password.form.tfa.tip":"Only if you have enabled the 2-Factor Authentification method.","password.reset-form.success":"Done!","password.reset-form.title":"Reset your password","password_strength.feedback.moderate":"Strength: moderate","password_strength.feedback.strong":"Strength: strong","password_strength.feedback.weak":"Strength: weak","passwords.form.error.empty":"At least one field is required.","passwords.form.error.identifiants_mismatch":"Identifiers don't match.","passwords.form.error.user_not_found":"User not found.","remote_identity.action.back":"Previous","remote_identity.action.cancel":"Cancel","remote_identity.action.continue":"Continue","remote_identity.action.delete":"Delete","remote_identity.action.disconnect":"Disconnect","remote_identity.action.edit":"Edit","remote_identity.action.finish":"Connect","remote_identity.action.next":"Next","remote_identity.action.save":"Save","remote_identity.action.toggle-email-form":"Email (via IMAP)","remote_identity.add_account":"Add an external account","remote_identity.choose-provider.title":"Select a provider","remote_identity.confirm-delete.content":"The external account will deactivated then deleted.","remote_identity.confirm-delete.title":"Delete the external account","remote_identity.create_help":"Add an external account will allow you to aggregate messages for this account in your Caliopen inbox and answer to your contacts using one of these acounts.","remote_identity.email.help":"You will have to fill the form with your imap server's parameters","remote_identity.feedback.loading_messages":"Loading your messages, please wait.","remote_identity.fetch_method.fetch_all":"All messages from now and the historical","remote_identity.fetch_method.from_now":"Only all messages from now","remote_identity.form.display_name.error":"a name is required","remote_identity.form.display_name.label":"Name:","remote_identity.form.display_name.placeholder":"john@doe.tld","remote_identity.form.identifier.error":"a valid email is required","remote_identity.form.identifier.error.uniqueness":"This address is already configured","remote_identity.form.identifier.label":"Email:","remote_identity.form.identifier.placeholder":"john@doe.tld","remote_identity.form.incomming_mail_server.label":"Incoming mail server","remote_identity.form.login.label":"Login:","remote_identity.form.password.error":"password is required","remote_identity.form.password.label":"Password:","remote_identity.form.port.label":"Port:","remote_identity.form.protocol.error":"protocol is required","remote_identity.form.protocol.label":"Protocol:","remote_identity.form.serverHostname.error":"mail server is required","remote_identity.form.serverPort.error":"port is required","remote_identity.form.username.error":"login is required","remote_identity.form.username.label":"Login:","remote_identity.form_legend":"Connect an email server","remote_identity.gmail.help":"You will be redirected to gmail authentication","remote_identity.gmail_warning":"<0>If you aim to add a Gmail account, please ensure that IMAP protocol is activated in your Gmail settings at <1>\xAB Forward and POP/IMAP \xBB</1>, and that <2>Less secure application access</2> is activated for your Google account.</0>","remote_identity.how_to":"<0>External accounts are fetched every 15 minutes.<1/>Currently there is no indicator to inform that the account is correctly configured until first try is done.</0>","remote_identity.last_connection":"Last connection: <0/>","remote_identity.last_connection.never":"Never","remote_identity.protocol.mail":"Mail","remote_identity.provider-logo":function(a){return[a("name")," logo"]},"remote_identity.status.active":"Enabled","remote_identity.status.inactive":"Disabled","remote_identity.twitter.help":"You will be redirected to twitter authentication and authorize the application","reply-form.by":function(a){return["by ",a("draftType")]},"reply-form.in-reply-to":function(a){return["In reply to: ",a("excerpt")]},"reply-form.now":"Now","reply-form.protocol.email":"email","reply-form.you":"You","reset-password.form.errors.token_not_found":"Token is no more valid. Please retry.","route.compose.label":"Compose","route.contact-book.label":"Contacts","route.discussion.label":"Discussion  ...","route.new-contact.label":"New contact","route.search-results.label":function(a){return["Results for: ",a("term")]},"route.settings.label.application":"Application","route.settings.label.default":"Settings","route.settings.label.devices":"Devices","route.settings.label.identities":"Identities","route.settings.label.signatures":"Signatures","route.settings.label.tags":"Tags","route.timeline.label":"Timeline","route.user.label.default":"Account","route.user.label.privacy":"Privacy","route.user.label.profile":"Profile","route.user.label.security":"Security","search-results.actions.display-all":"Display all","search-results.all":function(a){return["All (",a("total"),")"]},"search-results.contacts":function(a){return["Contacts (",a("nbContacts"),")"]},"search-results.messages":function(a){return["Messages (",a("nbMessages"),")"]},"search-results.preview.nb-contacts":function(a){return[a("nbContacts")," contacts contains \"",a("term"),"\" in their label or profile:"]},"search-results.preview.nb-messages":function(a){return[a("nbMessages")," messages contains \"",a("term"),"\" in their subject or content:"]},"settings.application":"Application","settings.contact.display_format.options.first_last":"Firstname, Lastname","settings.contact.display_format.options.last_first":"Lastname, Firstname","settings.contact.display_order_by.options.firstname":"Firstname","settings.contact.display_order_by.options.lastname":"Lastname","settings.contact.title":"Contact settings","settings.contacts.display.label":"Display","settings.contacts.order.label":"Order by","settings.desktop_notification.action.request-desktop_notification_permission":"Enable desktop notifications","settings.desktop_notification.action.test_desktop_notification":"Check desktop notifications","settings.desktop_notification.desktop_notifications_enabled":"Desktop notifications enabled","settings.desktop_notification.disabled":"Notifications are disabled, please check your browser settings","settings.desktop_notification.feedback.enabled":"Desktop notifications are enabled","settings.desktop_notification.no_support":"Notifications are not supported by your browser","settings.desktop_notification.title":"Desktop notifications","settings.devices":"Devices","settings.form.feedback.successfull":"Settings successfully updated!","settings.form.feedback.unexpected-error":"Error when updating settings.","settings.identities":"External accounts","settings.interface.language.label":"Language","settings.interface.language.options.de":"German","settings.interface.language.options.en":"English","settings.interface.language.options.fr":"French","settings.interface.title":"Customize your interface","settings.message.display_format.label":"Display","settings.message.display_format.options.plain_text":"Plain text","settings.message.display_format.options.rich_text":"Rich text","settings.message.title":"Messages settings","settings.notification.delay_disappear.label":"Display delay","settings.notification.delay_disappear.options.second":function(a){return[a("0")," Seconds"]},"settings.notification.enabled.label":"Enabled","settings.notification.message_preview.label":"Messages preview","settings.notification.message_preview.options.always":"Always","settings.notification.message_preview.options.off":"Off","settings.notification.sound_enabled.label":"Sounds enabled","settings.notification.title":"Notifications settings","settings.presentation.update.action":"Save settings","settings.signature.label":"Signature","settings.signature.update.action":"Save","settings.signatures":"Signatures","settings.signatures.title":"Update your signature","settings.tag.action.save-tag":"Save","settings.tag.form.error.create_fail":"Unable to create the tag. A tag with the same id may already exist.","settings.tags":"Tags","settings.tags.action.delete":"Delete","settings.tags.title":"Tags","settings.tags.title.create":"Create new tag","signin.action.forgot_password":"Forgot password?","signin.action.login":"Login","signin.action.login_public":"I'm in a public place","signin.action.login_safe":"I'm in a safe place","signin.action.login_unsecure":"I'm in a non private place","signin.create_an_account":"Create an account","signin.feedback.invalid":"Credentials are invalid","signin.feedback.required_password":"A password is required","signin.feedback.required_username":"A username is required","signin.form.password.label":"Password:","signin.form.password.placeholder":"password","signin.form.username.label":"Username:","signin.form.username.placeholder":"username","signin.title":"Please Log In","signup.action.create":"Create","signup.feedback.invalid":"Credentials are invalid","signup.feedback.invalid_recovery_email":"The email should be valid","signup.feedback.required_password":"A password is required","signup.feedback.required_privacy":"We need your privacy policy agreement","signup.feedback.required_recovery_email":"A backup email is required","signup.feedback.required_tos":"We need your terms and conditions agreement","signup.feedback.required_username":"A username is required","signup.feedback.unable_to_signup":"Unable to signup. Please retry or contact an administrator.","signup.feedback.unavailable_username":"We are sorry, this username is not available","signup.feedback.username_double_dots":"The username cannot contain two dots (.) next to the other","signup.feedback.username_invalid_characters":function(a){return["The username cannot contain some special characters like ",a("0")," and space"]},"signup.feedback.username_length":"The length of the username must be be between 3 and 42","signup.feedback.username_starting_ending_dot":"The username cannot start or end with a dot (.)","signup.form.invitation_email.label":"Invitation email:","signup.form.invitation_email.placeholder":"example@domain.tld","signup.form.invitation_email.tip":"Please fill in an email so that we can send you updates about Caliopen.","signup.form.password.label":"Password:","signup.form.password.placeholder":"password","signup.form.privacy.checkbox.label":"I understand and agree","signup.form.privacy.intro":"Throughout the development phase, we collect some data, but no more than the NSA :-).","signup.form.privacy.more_info":"More info","signup.form.privacy.title":"Privacy policy","signup.form.recovery_email.label":"Backup email address","signup.form.recovery_email.placeholder":"Backup email address","signup.form.tos.label":"I agree Terms and conditions","signup.form.username.label":"Username:","signup.form.username.placeholder":"username","signup.go_signin":"I already have an account","signup.limited_registration":"During alpha phase, signup is limited. Please register at <a href=\"https://welcome.caliopen.org\">https://welcome.caliopen.org</a>.","signup.privacy.modal.close":"Ok got it !","signup.privacy.modal.label":"About Piwik","signup.privacy.modal.text.alpha_tester":"As an alpha-tester your contribution is precious and will allow us to finalize Caliopen.","signup.privacy.modal.text.desactivate_dnt":"You need to deactivate the DoNotTrack setting from your browser preferences (more informations at http://donottrack.us), as well as allowing cookies.","signup.privacy.modal.text.get_data":"For this purpose, you grant us the right to collect data related to your usage (displayed pages, timings, clics, scrolls ...almost everything that can be collected!).","signup.privacy.modal.text.piwik":"We use https://piwik.org/ the open-source analytics plateform. The collected data will not be disclosed to any third party, and will stay scoped to Caliopen's alpha testing purpose.","signup.privacy.modal.title":"Caliopen is under development !","signup.title":"Create your account","tag_list.all_contacts":"All contacts","tags.action.add":"Add","tags.action.create":"Create","tags.action.remove":"Remove","tags.common_tags_applied":"Common tags applied to the current selection:","tags.form.add.label":"Add a tag","tags.form.add.placeholder":"New tag ...","tags.form.search.label":"Search","tags.form.search.placeholder":"Search a tag ...","tags.header.label":"Tags","tags.header.title":function(a){return["Tags <0>(Total: ",a("nb"),")</0>"]},"tags.label.important":"Important","tags.label.inbox":"Inbox","tags.label.spam":"Spam","take-a-tour.action.close":"Close","take-a-tour.action.last-step":"Finish","take-a-tour.action.next":"Next","take-a-tour.action.prev":"Previous","take-a-tour.action.skip":"Skip","take-a-tour.action.toggle":"Take a tour","take-a-tour.current-step":function(a){return["Take a tour (",a("current")," of ",a("total"),")"]},"take-a-tour.step.call-to-action.content":"<p>Create on the fly a new message.</p>","take-a-tour.step.call-to-action.title":"Create quickly","take-a-tour.step.importance-slider.title":"Importance level","take-a-tour.step.intro.content":"<p>With using  Caliopen, you can access to all of your private messages (Email, and more to come) through a single login.</p><p>Now, take a look at our main features, such as unified message management, intuitive search and more!</p>","take-a-tour.step.intro.title":"Welcome!","take-a-tour.step.search.content":"<p>Every search can include filters. All of the unencrypted data can be searched.</p><p>Here you can search everything in your messages and contacts.</p>","take-a-tour.step.search.title":"Intuitive search","take-a-tour.step.user-menu.content":"<p>Keep up-to-date your account information and manage your settings from here!</p><p>Customize your application in your settings.</p>","take-a-tour.step.user-menu.title":"Account menu","timeline-filter.label":"Timeline filter","timeline-filter.options.all":"All","timeline-filter.options.draft":"Drafts","timeline-filter.options.received":"Received","timeline-filter.options.sent":"Sent","timeline.action.delete":"Delete","timeline.action.manage-tags":"Manage tags","timeline.confirm-delete.content":"The deletion is permanent, are you sure you want to delete these messages ?","timeline.confirm-delete.title":"Delete message(s)","timeline.discussions.selected":function(a){return[a("count","plural",{one:["#","/",a("totalCount")," discussion"],other:["#","/",a("totalCount")," discussions"]})]},"timeline.draft-prefix":"Draft in progress:","timeline.new_messages":function(a){return["You have ",a("0")," new messages"]},"user.action.cancel_edit":"Cancel","user.action.delete":"Delete account","user.action.edit_profile":"Edit","user.action.improve_rank":"Improve your rank","user.action.share_profile":"Share","user.action.update":"Update","user.delete-form.action.delete":"Delete my Caliopen account","user.delete-form.error.incorrect_password":"Unable to delete your account, the given password is incorrect.","user.delete-form.modal-content":"Are you sure to delete your Caliopen account ?","user.delete-form.modal-title":"Delete account","user.delete-form.password.label":"Password","user.delete-form.password.placeholder":"password","user.feedback.delete_account_sucessful":"Your account has been deleted","user.openpgp.action.add":"Add","user.openpgp.action.create":"Create","user.openpgp.action.edit-keys":"Edit and add keys","user.openpgp.action.switch-generate-key":"Generate key","user.openpgp.action.switch-import-raw-key":"Import key","user.openpgp.form.email.label":"Email","user.openpgp.form.passphrase.label":"Passphrase","user.openpgp.form.private-key.label":"Private key","user.openpgp.form.public-key.label":"Public key","user.openpgp.has-passphrase":"Enable passphrase","user.privacy":"Privacy","user.privacy.improve_pi":"Improve your privacy index","user.profile":"Profile","user.profile.form.avatar.label":"Avatar","user.profile.form.email.label":"Email","user.profile.form.family_name.label":"Family name","user.profile.form.given_name.label":"Given name","user.profile.form.recovery_email.label":"Recovery email","user.profile.form.title":"Complete your profile","user.profile.form.username.label":"Username","user.profile.subscribed_date":"Subscribed on","user.security":"Security","user.security.section_password.title":"Password","user.security.section_pgpkeys.title":"PGP private keys","user.security.section_tfa.title":"Two-factor authentication"}};