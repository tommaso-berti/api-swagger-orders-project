# api-swagger-orders-project

This repository contains a Design-First API exercise focused on defining an Orders API contract with OpenAPI before backend implementation.

## Overview

This exercise covers:

- API contract design using OpenAPI
- endpoint, payload, and status code modeling in YAML
- contract validation and iteration with Swagger Editor
- use of the API contract as the implementation reference

## Scope of the Exercise

The objective is to practice contract-first API development by defining API behavior before application logic.

The tutorial uses a JavaScript stack (Node.js + Express.js), but any stack capable of building a RESTful API is acceptable.

## Prerequisites

Before starting, the following prerequisites are required:

- familiarity with the OpenAPI Specification and YAML format
- familiarity with Node.js
- familiarity with Express.js
- Node.js is installed on your machine
- Express.js is installed in the project environment

If any of these concepts are unfamiliar, reviewing previous course materials is recommended.

## Designing the API Contract Using Swagger Editor

This project follows a Design-First approach.  
Swagger Editor should be run locally to create and validate the OpenAPI document.

### Suggested workflow

1. Start Swagger Editor locally.
2. Create a new OpenAPI YAML file for the Orders API.
3. Define API metadata (`title`, `version`, `description`).
4. Add paths, operations, request bodies, and response schemas.
5. Validate the contract and fix warnings/errors.
6. Export or save the OpenAPI file as the project API contract.

## Expected Outcome

Expected deliverables:

- a complete OpenAPI contract for the Orders API
- a validated YAML specification with clear request and response models
- a contract ready to support implementation and testing
