import logging
import azure.functions as func


def main(req: func.HttpRequest) -> func.HttpResponse:
    logging.info('Python HTTP trigger function processed a request.')
    req_body = req.get_json()
    return func.HttpResponse(req_body)
