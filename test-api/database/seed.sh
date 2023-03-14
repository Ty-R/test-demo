#!/bin/sh

mongoimport --db animal-facts --file /database/animal-facts.json --jsonArray
