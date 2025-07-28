#!/bin/sh

arg0=$(basename "$0" .sh)

usage_info()
{
    echo "Usage: $arg0 app \\"
    echo
    echo "Build app inside docker env"
    echo "  supported apps for development: apiv2"
}

usage()
{
    exec 1>2   # Send standard output to standard error
    usage_info
    exit 1
}

help()
{
    usage_info
    echo
    exit 0
}

flags()
{
    while test $# -gt 0
    do
        case "$1" in
        (apiv2)
            export DEV_APP="$1"
            ;;
        (-h|--help)
            help;;
        (*) usage;;
        esac
    done
}

flags "$@"

set +e
set -v

echo $DEV_APP
