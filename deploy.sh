#!/usr/bin/env bash
source env.sh
rsync --rsync-path 'sudo -u www-data rsync' -az build/* "${DEPLOY_USERNAME}@${DEPLOY_HOST}":/var/www/kiraworld.space/
