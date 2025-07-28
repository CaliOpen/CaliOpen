chiffrer.md

# How to manually test encrypted mails

## Create and send encrypted mail

1. Create a private key in Caliopen
2. dl la clé public (depuis le contact)
3. ajouter la clé pub à gpg

```
gpg --import PGP.pubkey.asc
```

4. chiffrer un message (text-clear.txt)

```
gpg -a -o text-encrypted.txt -r dev@caliopen.local -e text-clear.txt
```

5. remplacer le contenu chiffré dans le fichier encrypted-mail.eml
6. Adapter l'auteur du mail
7. envoyer l'email avec sendemail

```
sendemail -f farnsworth@planet-express.space -t dev@caliopen.local -s localhost:2525 -v -o message-format=raw -o message-file=encrypted-mail.eml
```

## annexes

**encrypted-mail.eml**

```
Return-Path: <farnsworth@planet-express.space>
Delivered-To: dev@caliopen.local
To: Dave Loper <dev@caliopen.local>
From: Dave Loper <farnsworth@planet-express.space>
Date: Sun, 9 May 2021 11:26:59 +0200
MIME-Version: 1.0
Subject: This mail is encrypted
Content-Type: multipart/encrypted;
 protocol="application/pgp-encrypted";
 boundary="be1AQ8XDkEIbAG8Y1OaTmUXzEQSQD58Gl"
X-GND-Status: LEGIT

This is an OpenPGP/MIME encrypted message (RFC 4880 and 3156)
--be1AQ8XDkEIbAG8Y1OaTmUXzEQSQD58Gl
Content-Type: application/pgp-encrypted
Content-Description: PGP/MIME version identification

Version: 1

--be1AQ8XDkEIbAG8Y1OaTmUXzEQSQD58Gl
Content-Type: application/octet-stream; name="encrypted.asc"
Content-Description: OpenPGP encrypted message
Content-Disposition: inline; filename="encrypted.asc"

-----BEGIN PGP MESSAGE-----
-----END PGP MESSAGE-----

--be1AQ8XDkEIbAG8Y1OaTmUXzEQSQD58Gl--
```

**Alternate commands (not working)**

```
sendemail -f president@elysee.fr -t dev@caliopen.local -s localhost:2525 -o message-file=<email chiffré adressé à dev@caliopen.local> -v -o message-format=raw
```

```
echo $BODY | gpg2 -eas -r "$TO" | sendemail -f "$FROM" -t "$TO" -s $SERVER -xu $FROM -xp "$PASS" -o tls=yes -o message-content-type=application/pgp-encrypted
```
