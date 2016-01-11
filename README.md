# Snapshot of CA Dept. of Education SAT, ACT, AP Test Results Page

See the mirror at: http://wgetsnaps.github.io/cde.ca.gov--ds-sp-ai/ds/sp/ai/

This repository is a mirror of the following site:

|        Key         |                           Value                           |
|--------------------|-----------------------------------------------------------|
| Site title         | Postsecondary Preparation - SAT, ACT, and AP Test Results |
| Original publisher | California Department of Education                        |
| URL                | http://www.cde.ca.gov/ds/sp/ai/                           |
| Mirrored at        | 2016-01-11 07:45:44                                       |



# Bash and wget commands

To create this mirror:

~~~sh
wget --recursive \
     --span-hosts \
     --level 1 \
     --no-host-directories \
     --adjust-extension \
     --convert-links \
     --output-file /dev/stdout \
     http://www.cde.ca.gov/ds/sp/ai/ |
     tee ./wget.log
~~~
