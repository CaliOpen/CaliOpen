import os
import sys
import re

from setuptools import setup, find_packages

PY3 = sys.version_info[0] == 3

name = "caliopen_nats"

here = os.path.abspath(os.path.dirname(__file__))
README = open(os.path.join(here, 'README.rst')).read()
CHANGES = open(os.path.join(here, 'CHANGES.rst')).read()

with open(os.path.join(*([here] + name.split('.') + ['__init__.py']))) as v_file:
    version = re.compile(r".*__version__ = '(.*?)'", re.S).match(v_file.read()).group(1)

requires = [
    'nats-client>=0.8.4',
    'tornado==4.2',]

if (os.path.isfile('./requirements.deps')):
    with open('./requirements.deps') as f_deps:
        requires.extend(f_deps.read().split('\n'))


tests_require = []
if sys.version_info < (3, 3):
    tests_require.append('mock')


extras_require = {
    'dev': [],
    'doc': [],
    'test': tests_require
}

setup(name=name,
      version=version,
      description='subscription service to NATS topics',
      long_description=README + '\n\n' + CHANGES,
      classifiers=[
          "Programming Language :: Python",
          "Topic :: Internet :: WWW/HTTP :: NATS",
          "Topic :: Internet :: WWW/HTTP :: WSGI :: Application",
      ],
      author='Caliopen Contributors',
      author_email='',
      url='https://github.com/CaliOpen/Caliopen/src/backend/interface/NATS/py.client',
      license='AGPLv3',
      keywords='nats',
      packages=find_packages(),
      include_package_data=True,
      zip_safe=False,
      install_requires=requires,
      tests_require=tests_require,
      extras_require=extras_require,
      test_suite="",
      entry_points={
          'paste.app_factory': ['main = nats_client:listener'],
      })
