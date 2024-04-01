FROM php:8.1-fpm

# Arguments defined in docker-compose.yml
ARG user
ARG uid

# Install system dependencies
RUN apt-get update && apt-get install -y \
    git \
    curl \
    libpng-dev \
    libonig-dev \
    libxml2-dev \
    zip \
    unzip \
    && rm -rf /var/lib/apt/lists/*

# install nodejs
RUN curl -sL https://deb.nodesource.com/setup_16.x | bash -
RUN apt-get install -y nodejs

# install npm
RUN apt-get install -y npm

# Install PHP extensions
RUN docker-php-ext-install pdo_mysql mbstring exif pcntl bcmath gd

# Get latest Composer
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer


# Get latest Composer
COPY --from=composer:latest /usr/bin/composer /usr/bin/composer

# Create a non-root user to run Composer and Artisan Commands
RUN useradd -G www-data,root -u ${uid} -d /home/${user} ${user}
RUN mkdir -p /home/${user}/.composer && chown -R ${user}:${user} /home/${user}

# Set the working directory
WORKDIR /var/www

USER ${user}