#!/usr/bin/env bash

# exit on error
set -o errexit

npm run build
bundle install
rails db:migrate
rails db:seed #is needed for demo user and in future songs