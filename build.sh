#!/usr/bin/env bash

# exit on error
set -o errexit

echo "Building project..."
echo "Installing dependencies..."
pip install --upgrade pip
pip install -r requirements.txt
echo "Finished Building project"
