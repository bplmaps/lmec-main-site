$BUILD_DIR='public'
rm -rf $BUILD_DIR
hugo
rsync --omit-dir-times -r -a -v -e ssh --delete './public/' geoservices@$GEOSERVICES_IP:/var/www/geoservices/main-site-redesign
