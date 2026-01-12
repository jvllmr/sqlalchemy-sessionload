window.BENCHMARK_DATA = {
  "lastUpdate": 1768196586406,
  "repoUrl": "https://github.com/jvllmr/sqlalchemy-sessionload",
  "entries": {
    "Benchmark": [
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "bdc2a5fb91324854778787ad32571c46c5ae8fa1",
          "message": "split test, benchmark and coverage into multiple files",
          "timestamp": "2024-01-03T21:37:47+01:00",
          "tree_id": "3be244c25dfea2ab0817185c74f928cedbf32e44",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bdc2a5fb91324854778787ad32571c46c5ae8fa1"
        },
        "date": 1704314324233,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 179.06890249743628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019604376270080676",
            "extra": "mean: 5.584442558440973 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 921.6126619284289,
            "unit": "iter/sec",
            "range": "stddev: 0.00021081626796679937",
            "extra": "mean: 1.0850545368024236 msec\nrounds: 788"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.6306013688258876,
            "unit": "iter/sec",
            "range": "stddev: 0.015016041164739966",
            "extra": "mean: 380.14121479999403 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 97.74157229511616,
            "unit": "iter/sec",
            "range": "stddev: 0.002534283863357457",
            "extra": "mean: 10.231061118810821 msec\nrounds: 101"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4b2789c17c860376212b10220a6f6845b842f34",
          "message": "Update actions/cache action to v3",
          "timestamp": "2023-12-15T18:23:26Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/4/commits/d4b2789c17c860376212b10220a6f6845b842f34"
        },
        "date": 1704314330255,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 214.73365249821137,
            "unit": "iter/sec",
            "range": "stddev: 0.0019547430620568606",
            "extra": "mean: 4.656931917126169 msec\nrounds: 181"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1070.1401990681188,
            "unit": "iter/sec",
            "range": "stddev: 0.0008316244471838844",
            "extra": "mean: 934.456999999442 usec\nrounds: 841"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.480210036550243,
            "unit": "iter/sec",
            "range": "stddev: 0.012580083529187257",
            "extra": "mean: 287.33897940000475 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 118.52011926682259,
            "unit": "iter/sec",
            "range": "stddev: 0.0026222887394302392",
            "extra": "mean: 8.437386042016334 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f",
          "message": "run pre-commit on all files",
          "timestamp": "2024-01-03T21:38:11+01:00",
          "tree_id": "caaee076b638e530c0c86649daebf30d3963af14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7dbabba15448e9c7aef6f96330bbd2be6d0aaa8f"
        },
        "date": 1704314336548,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 218.0745175891708,
            "unit": "iter/sec",
            "range": "stddev: 0.00156453995957059",
            "extra": "mean: 4.585588500000232 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1112.0955281875815,
            "unit": "iter/sec",
            "range": "stddev: 0.0007170680696132573",
            "extra": "mean: 899.2033279998282 usec\nrounds: 875"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.0299944575038382,
            "unit": "iter/sec",
            "range": "stddev: 0.012046858908397119",
            "extra": "mean: 330.033607 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 125.20417275920617,
            "unit": "iter/sec",
            "range": "stddev: 0.0021352240027651087",
            "extra": "mean: 7.986954252101559 msec\nrounds: 119"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "d7e7839febb8276646fc7cc5b1a811c8ed14df7c",
          "message": "Update actions/cache action to v3 (#4)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-03T21:39:20+01:00",
          "tree_id": "92d8fa5fb0267214046c32272d40587d9d3c69d2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d7e7839febb8276646fc7cc5b1a811c8ed14df7c"
        },
        "date": 1704314407587,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 208.75401197164533,
            "unit": "iter/sec",
            "range": "stddev: 0.0022327142685017085",
            "extra": "mean: 4.790327096256374 msec\nrounds: 187"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1076.5203368627529,
            "unit": "iter/sec",
            "range": "stddev: 0.00001253231479226513",
            "extra": "mean: 928.9188190482754 usec\nrounds: 735"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 3.160955757153028,
            "unit": "iter/sec",
            "range": "stddev: 0.022972509284582762",
            "extra": "mean: 316.3600115999941 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 115.1291433189704,
            "unit": "iter/sec",
            "range": "stddev: 0.0025424577995156075",
            "extra": "mean: 8.685898037384467 msec\nrounds: 107"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5ecd597a5a9abc1ef630c8066f0dfe37a086447d",
          "message": "ci remove benchmark and coverage from test",
          "timestamp": "2024-01-03T21:42:50+01:00",
          "tree_id": "41d682fd7afb4f7d165c346ff99ffe6c81cf2401",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5ecd597a5a9abc1ef630c8066f0dfe37a086447d"
        },
        "date": 1704314624605,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 177.54279023115063,
            "unit": "iter/sec",
            "range": "stddev: 0.0020221423027266807",
            "extra": "mean: 5.632444993671987 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 929.3069192392974,
            "unit": "iter/sec",
            "range": "stddev: 0.000012907665693069543",
            "extra": "mean: 1.0760707569234176 msec\nrounds: 650"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.540965193099009,
            "unit": "iter/sec",
            "range": "stddev: 0.013324186407296375",
            "extra": "mean: 393.5512390000042 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 101.93406409869931,
            "unit": "iter/sec",
            "range": "stddev: 0.0027722797760469965",
            "extra": "mean: 9.810263221053697 msec\nrounds: 95"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "c22469582409b45f5ed319b854b55a6003b3a9c2",
          "message": "remove cache action from benchmark ci",
          "timestamp": "2024-01-03T21:46:36+01:00",
          "tree_id": "54348df001696158c735914682508861a8b79144",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c22469582409b45f5ed319b854b55a6003b3a9c2"
        },
        "date": 1704314841014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 222.2262217743251,
            "unit": "iter/sec",
            "range": "stddev: 0.001698475043472033",
            "extra": "mean: 4.499919010527564 msec\nrounds: 190"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1122.334985889897,
            "unit": "iter/sec",
            "range": "stddev: 0.0007519024087852635",
            "extra": "mean: 890.9995790669416 usec\nrounds: 879"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 2.9695905541134313,
            "unit": "iter/sec",
            "range": "stddev: 0.012273868902624812",
            "extra": "mean: 336.74676080000836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 129.00741696585754,
            "unit": "iter/sec",
            "range": "stddev: 0.00017099417000737983",
            "extra": "mean: 7.751492305784674 msec\nrounds: 121"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b8e6b2e0350460869b0e90ccb1443117c23cc452",
          "message": "add link to benchmark in readme",
          "timestamp": "2024-01-03T21:51:42+01:00",
          "tree_id": "56f82bfdd20530d3856cd3ba8ea96a8d5327768b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b8e6b2e0350460869b0e90ccb1443117c23cc452"
        },
        "date": 1704315140230,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.83035818391926,
            "unit": "iter/sec",
            "range": "stddev: 0.0010412817349641267",
            "extra": "mean: 3.5108617156401736 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1418.3039416733795,
            "unit": "iter/sec",
            "range": "stddev: 0.00045658721779692237",
            "extra": "mean: 705.0674898499926 usec\nrounds: 1133"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.147864696716635,
            "unit": "iter/sec",
            "range": "stddev: 0.009469965688243109",
            "extra": "mean: 241.08790260000035 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 159.06349330111584,
            "unit": "iter/sec",
            "range": "stddev: 0.0016194249078504703",
            "extra": "mean: 6.286797675862341 msec\nrounds: 145"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "6d537847e8caef2b3facb2ba6413ce73e5c189da",
          "message": "install without changing lock in ci",
          "timestamp": "2024-01-04T20:55:31+01:00",
          "tree_id": "3156a68f7e0eb14cbbba48c25b822559d6284c22",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6d537847e8caef2b3facb2ba6413ce73e5c189da"
        },
        "date": 1704398183880,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 315.7070571305365,
            "unit": "iter/sec",
            "range": "stddev: 0.0010920664794828111",
            "extra": "mean: 3.1674933373013783 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1809.886401629017,
            "unit": "iter/sec",
            "range": "stddev: 0.000053684396891738004",
            "extra": "mean: 552.5208649006557 usec\nrounds: 1510"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.461852005077098,
            "unit": "iter/sec",
            "range": "stddev: 0.007033306350205802",
            "extra": "mean: 224.12218040000198 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 173.33166321709717,
            "unit": "iter/sec",
            "range": "stddev: 0.001818893371103436",
            "extra": "mean: 5.769286357954717 msec\nrounds: 176"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7973b1dea4669a956010ea371f0af0f85f4292e",
          "message": "update dependencies",
          "timestamp": "2024-01-04T21:02:14+01:00",
          "tree_id": "39ee0043bfefbc5b155ca2bda406a2419ac583a7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7973b1dea4669a956010ea371f0af0f85f4292e"
        },
        "date": 1704398579269,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.6312842486219,
            "unit": "iter/sec",
            "range": "stddev: 0.0011010018689516714",
            "extra": "mean: 3.3940727053144806 msec\nrounds: 207"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1645.9417607803975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005251776931886666",
            "extra": "mean: 607.5549110108644 usec\nrounds: 1326"
          },
          {
            "name": "tests/test_options.py::test_relationship_load",
            "value": 4.370741875206283,
            "unit": "iter/sec",
            "range": "stddev: 0.010039284710522685",
            "extra": "mean: 228.79411060000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_realtionship_load_option",
            "value": 169.92116477637916,
            "unit": "iter/sec",
            "range": "stddev: 0.0013858909839172485",
            "extra": "mean: 5.885082069182064 msec\nrounds: 159"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "dd236e135f86c493978478d1063257f7b0aecef7",
          "message": "remove unnecessary comment",
          "timestamp": "2024-01-05T20:13:42+01:00",
          "tree_id": "206fe3f847daa67f5b31d000c50fc4d9b5da2768",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dd236e135f86c493978478d1063257f7b0aecef7"
        },
        "date": 1704482073151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.0457412588874,
            "unit": "iter/sec",
            "range": "stddev: 0.001366163269766585",
            "extra": "mean: 3.332825174602873 msec\nrounds: 189"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1721.0073702224183,
            "unit": "iter/sec",
            "range": "stddev: 0.00040738323065369903",
            "extra": "mean: 581.0550363132744 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.212105314359454,
            "unit": "iter/sec",
            "range": "stddev: 0.007714558528079247",
            "extra": "mean: 237.41096799999468 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.403563372584578,
            "unit": "iter/sec",
            "range": "stddev: 0.007754023868752204",
            "extra": "mean: 74.60702592307527 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.56027934658854,
            "unit": "iter/sec",
            "range": "stddev: 0.0015858485832686568",
            "extra": "mean: 5.761686969880161 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.32608948430751,
            "unit": "iter/sec",
            "range": "stddev: 0.006864296180547274",
            "extra": "mean: 75.04076879999768 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "dd236e135f86c493978478d1063257f7b0aecef7",
          "message": "remove unnecessary comment",
          "timestamp": "2024-01-05T20:13:42+01:00",
          "tree_id": "206fe3f847daa67f5b31d000c50fc4d9b5da2768",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dd236e135f86c493978478d1063257f7b0aecef7"
        },
        "date": 1704482073151,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.0457412588874,
            "unit": "iter/sec",
            "range": "stddev: 0.001366163269766585",
            "extra": "mean: 3.332825174602873 msec\nrounds: 189"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1721.0073702224183,
            "unit": "iter/sec",
            "range": "stddev: 0.00040738323065369903",
            "extra": "mean: 581.0550363132744 usec\nrounds: 1432"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.212105314359454,
            "unit": "iter/sec",
            "range": "stddev: 0.007714558528079247",
            "extra": "mean: 237.41096799999468 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.403563372584578,
            "unit": "iter/sec",
            "range": "stddev: 0.007754023868752204",
            "extra": "mean: 74.60702592307527 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.56027934658854,
            "unit": "iter/sec",
            "range": "stddev: 0.0015858485832686568",
            "extra": "mean: 5.761686969880161 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.32608948430751,
            "unit": "iter/sec",
            "range": "stddev: 0.006864296180547274",
            "extra": "mean: 75.04076879999768 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "51b5653ab3ab96cdf23d2d08881adadd923ac10e",
          "message": "rename contributing file",
          "timestamp": "2024-01-05T20:15:42+01:00",
          "tree_id": "9eac849faa2b41fb216674c6644d06b2a8b3f827",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/51b5653ab3ab96cdf23d2d08881adadd923ac10e"
        },
        "date": 1704482190344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.7482826310884,
            "unit": "iter/sec",
            "range": "stddev: 0.001461217296043718",
            "extra": "mean: 3.2494088722462333 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1905.0696973726874,
            "unit": "iter/sec",
            "range": "stddev: 0.000012156048098020338",
            "extra": "mean: 524.9151783680755 usec\nrounds: 1054"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.424204714627436,
            "unit": "iter/sec",
            "range": "stddev: 0.01556271033304201",
            "extra": "mean: 226.02932379999743 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.152982126939442,
            "unit": "iter/sec",
            "range": "stddev: 0.012683561501519886",
            "extra": "mean: 65.99361047368814 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.09120164086391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605107256299658",
            "extra": "mean: 5.491753533332636 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.183008186740228,
            "unit": "iter/sec",
            "range": "stddev: 0.012772315930092584",
            "extra": "mean: 65.86310088888246 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "51b5653ab3ab96cdf23d2d08881adadd923ac10e",
          "message": "rename contributing file",
          "timestamp": "2024-01-05T20:15:42+01:00",
          "tree_id": "9eac849faa2b41fb216674c6644d06b2a8b3f827",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/51b5653ab3ab96cdf23d2d08881adadd923ac10e"
        },
        "date": 1704482190344,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.7482826310884,
            "unit": "iter/sec",
            "range": "stddev: 0.001461217296043718",
            "extra": "mean: 3.2494088722462333 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1905.0696973726874,
            "unit": "iter/sec",
            "range": "stddev: 0.000012156048098020338",
            "extra": "mean: 524.9151783680755 usec\nrounds: 1054"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.424204714627436,
            "unit": "iter/sec",
            "range": "stddev: 0.01556271033304201",
            "extra": "mean: 226.02932379999743 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.152982126939442,
            "unit": "iter/sec",
            "range": "stddev: 0.012683561501519886",
            "extra": "mean: 65.99361047368814 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.09120164086391,
            "unit": "iter/sec",
            "range": "stddev: 0.0003605107256299658",
            "extra": "mean: 5.491753533332636 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.183008186740228,
            "unit": "iter/sec",
            "range": "stddev: 0.012772315930092584",
            "extra": "mean: 65.86310088888246 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "dbda8390407971d721fce8ba227c727352d52170",
          "message": "add publish workflow",
          "timestamp": "2024-01-05T20:26:02+01:00",
          "tree_id": "d411ad3dab05741ca1c347dd3417635d669ad590",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dbda8390407971d721fce8ba227c727352d52170"
        },
        "date": 1704482824295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.1363959868585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011917231258803623",
            "extra": "mean: 3.234818070540327 msec\nrounds: 241"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1782.583755908947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789754580552347",
            "extra": "mean: 560.9834582443481 usec\nrounds: 1401"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.672423287360173,
            "unit": "iter/sec",
            "range": "stddev: 0.01499471151224194",
            "extra": "mean: 214.02170533333256 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.143506054739891,
            "unit": "iter/sec",
            "range": "stddev: 0.008778495716186264",
            "extra": "mean: 66.03490607691882 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.87609358595725,
            "unit": "iter/sec",
            "range": "stddev: 0.0021362323758864574",
            "extra": "mean: 5.685821077844571 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.949517129497465,
            "unit": "iter/sec",
            "range": "stddev: 0.008744529103478976",
            "extra": "mean: 66.89179264705892 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "dbda8390407971d721fce8ba227c727352d52170",
          "message": "add publish workflow",
          "timestamp": "2024-01-05T20:26:02+01:00",
          "tree_id": "d411ad3dab05741ca1c347dd3417635d669ad590",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dbda8390407971d721fce8ba227c727352d52170"
        },
        "date": 1704482824295,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.1363959868585,
            "unit": "iter/sec",
            "range": "stddev: 0.0011917231258803623",
            "extra": "mean: 3.234818070540327 msec\nrounds: 241"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1782.583755908947,
            "unit": "iter/sec",
            "range": "stddev: 0.0004789754580552347",
            "extra": "mean: 560.9834582443481 usec\nrounds: 1401"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.672423287360173,
            "unit": "iter/sec",
            "range": "stddev: 0.01499471151224194",
            "extra": "mean: 214.02170533333256 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.143506054739891,
            "unit": "iter/sec",
            "range": "stddev: 0.008778495716186264",
            "extra": "mean: 66.03490607691882 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.87609358595725,
            "unit": "iter/sec",
            "range": "stddev: 0.0021362323758864574",
            "extra": "mean: 5.685821077844571 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.949517129497465,
            "unit": "iter/sec",
            "range": "stddev: 0.008744529103478976",
            "extra": "mean: 66.89179264705892 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "11a2bb9ce42f84c7a598093d40c11a4eb1df62b7",
          "message": "use trusted publishing",
          "timestamp": "2024-01-05T20:51:13+01:00",
          "tree_id": "8ea79406da4333b208a83422e2a861d447f45826",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/11a2bb9ce42f84c7a598093d40c11a4eb1df62b7"
        },
        "date": 1704484331236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.08614574328936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010508939897772057",
            "extra": "mean: 3.400364194214404 msec\nrounds: 242"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1644.8665049163449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009108614915267834",
            "extra": "mean: 607.9520721049993 usec\nrounds: 1373"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.035700937258774,
            "unit": "iter/sec",
            "range": "stddev: 0.010204424404821435",
            "extra": "mean: 247.788430199995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.295281052612157,
            "unit": "iter/sec",
            "range": "stddev: 0.007322878877351519",
            "extra": "mean: 75.2146566923102 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.39454475277114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013001231824715366",
            "extra": "mean: 5.868732484663286 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.073553715405343,
            "unit": "iter/sec",
            "range": "stddev: 0.007962055842607015",
            "extra": "mean: 76.49029649999761 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "11a2bb9ce42f84c7a598093d40c11a4eb1df62b7",
          "message": "use trusted publishing",
          "timestamp": "2024-01-05T20:51:13+01:00",
          "tree_id": "8ea79406da4333b208a83422e2a861d447f45826",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/11a2bb9ce42f84c7a598093d40c11a4eb1df62b7"
        },
        "date": 1704484331236,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.08614574328936,
            "unit": "iter/sec",
            "range": "stddev: 0.0010508939897772057",
            "extra": "mean: 3.400364194214404 msec\nrounds: 242"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1644.8665049163449,
            "unit": "iter/sec",
            "range": "stddev: 0.00009108614915267834",
            "extra": "mean: 607.9520721049993 usec\nrounds: 1373"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.035700937258774,
            "unit": "iter/sec",
            "range": "stddev: 0.010204424404821435",
            "extra": "mean: 247.788430199995 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.295281052612157,
            "unit": "iter/sec",
            "range": "stddev: 0.007322878877351519",
            "extra": "mean: 75.2146566923102 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.39454475277114,
            "unit": "iter/sec",
            "range": "stddev: 0.0013001231824715366",
            "extra": "mean: 5.868732484663286 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.073553715405343,
            "unit": "iter/sec",
            "range": "stddev: 0.007962055842607015",
            "extra": "mean: 76.49029649999761 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7feef0fd1b1589661130acfe820e566781f8a65",
          "message": "format python code in readme",
          "timestamp": "2024-01-05T20:55:34+01:00",
          "tree_id": "92b2c46306bb29e4295bcf1ec14722fcd483ad94",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7feef0fd1b1589661130acfe820e566781f8a65"
        },
        "date": 1704484583634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.1617526220828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013272307541836845",
            "extra": "mean: 3.365170622316782 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1716.8893881933664,
            "unit": "iter/sec",
            "range": "stddev: 0.000024455997106453227",
            "extra": "mean: 582.4487045448346 usec\nrounds: 44"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.928781262814316,
            "unit": "iter/sec",
            "range": "stddev: 0.016167910630091778",
            "extra": "mean: 254.531859399998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.912047804807477,
            "unit": "iter/sec",
            "range": "stddev: 0.014475438471769375",
            "extra": "mean: 83.94862213333454 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.20036280600965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929462639011794",
            "extra": "mean: 5.841109116883817 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.77565681936688,
            "unit": "iter/sec",
            "range": "stddev: 0.012373702086557694",
            "extra": "mean: 78.27386209091648 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "f7feef0fd1b1589661130acfe820e566781f8a65",
          "message": "format python code in readme",
          "timestamp": "2024-01-05T20:55:34+01:00",
          "tree_id": "92b2c46306bb29e4295bcf1ec14722fcd483ad94",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/f7feef0fd1b1589661130acfe820e566781f8a65"
        },
        "date": 1704484583634,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.1617526220828,
            "unit": "iter/sec",
            "range": "stddev: 0.0013272307541836845",
            "extra": "mean: 3.365170622316782 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1716.8893881933664,
            "unit": "iter/sec",
            "range": "stddev: 0.000024455997106453227",
            "extra": "mean: 582.4487045448346 usec\nrounds: 44"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.928781262814316,
            "unit": "iter/sec",
            "range": "stddev: 0.016167910630091778",
            "extra": "mean: 254.531859399998 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.912047804807477,
            "unit": "iter/sec",
            "range": "stddev: 0.014475438471769375",
            "extra": "mean: 83.94862213333454 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.20036280600965,
            "unit": "iter/sec",
            "range": "stddev: 0.0016929462639011794",
            "extra": "mean: 5.841109116883817 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.77565681936688,
            "unit": "iter/sec",
            "range": "stddev: 0.012373702086557694",
            "extra": "mean: 78.27386209091648 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "93717959bf704f3255783a1822140cbcb8987e9b",
          "message": "don't format pdm.lock",
          "timestamp": "2024-01-05T22:39:03+01:00",
          "tree_id": "66aaed48093bbf2be3cbde54f0491551d88ef32d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/93717959bf704f3255783a1822140cbcb8987e9b"
        },
        "date": 1704490795493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.94147553980343,
            "unit": "iter/sec",
            "range": "stddev: 0.0010113844150392317",
            "extra": "mean: 3.2579500643937003 msec\nrounds: 264"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1789.564744245642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014189676875783944",
            "extra": "mean: 558.7950942906688 usec\nrounds: 1156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.316760039107292,
            "unit": "iter/sec",
            "range": "stddev: 0.007852500424113956",
            "extra": "mean: 231.6552207999962 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.800214958942185,
            "unit": "iter/sec",
            "range": "stddev: 0.009061603966745175",
            "extra": "mean: 72.46263938461522 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.38677575978028,
            "unit": "iter/sec",
            "range": "stddev: 0.0018300839422059343",
            "extra": "mean: 5.800909005882753 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017205034463869,
            "unit": "iter/sec",
            "range": "stddev: 0.007503002634891164",
            "extra": "mean: 71.34089838461495 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "93717959bf704f3255783a1822140cbcb8987e9b",
          "message": "don't format pdm.lock",
          "timestamp": "2024-01-05T22:39:03+01:00",
          "tree_id": "66aaed48093bbf2be3cbde54f0491551d88ef32d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/93717959bf704f3255783a1822140cbcb8987e9b"
        },
        "date": 1704490795493,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.94147553980343,
            "unit": "iter/sec",
            "range": "stddev: 0.0010113844150392317",
            "extra": "mean: 3.2579500643937003 msec\nrounds: 264"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1789.564744245642,
            "unit": "iter/sec",
            "range": "stddev: 0.000014189676875783944",
            "extra": "mean: 558.7950942906688 usec\nrounds: 1156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.316760039107292,
            "unit": "iter/sec",
            "range": "stddev: 0.007852500424113956",
            "extra": "mean: 231.6552207999962 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.800214958942185,
            "unit": "iter/sec",
            "range": "stddev: 0.009061603966745175",
            "extra": "mean: 72.46263938461522 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.38677575978028,
            "unit": "iter/sec",
            "range": "stddev: 0.0018300839422059343",
            "extra": "mean: 5.800909005882753 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017205034463869,
            "unit": "iter/sec",
            "range": "stddev: 0.007503002634891164",
            "extra": "mean: 71.34089838461495 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "ddc9c5ffb361c9fed23b50adadbbcb2b9350f503",
          "message": "fix: between operator works with SQLAlchemy 2.0",
          "timestamp": "2024-01-06T02:03:56+01:00",
          "tree_id": "02c1fbed3d9ef7ea216137bce8b87a279c3a10ca",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/ddc9c5ffb361c9fed23b50adadbbcb2b9350f503"
        },
        "date": 1704503168709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.46249554528015,
            "unit": "iter/sec",
            "range": "stddev: 0.001386768592079233",
            "extra": "mean: 3.295300126637192 msec\nrounds: 229"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1740.1073909318723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591438365509031",
            "extra": "mean: 574.6771752199007 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.53807285633724,
            "unit": "iter/sec",
            "range": "stddev: 0.004324574924223331",
            "extra": "mean: 282.63974220000705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.659114195627938,
            "unit": "iter/sec",
            "range": "stddev: 0.012599476618643217",
            "extra": "mean: 85.7698091999983 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.4400336114723,
            "unit": "iter/sec",
            "range": "stddev: 0.002151496253312929",
            "extra": "mean: 5.832943326797637 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.867058193137066,
            "unit": "iter/sec",
            "range": "stddev: 0.013007507910466325",
            "extra": "mean: 84.26688263636545 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "ddc9c5ffb361c9fed23b50adadbbcb2b9350f503",
          "message": "fix: between operator works with SQLAlchemy 2.0",
          "timestamp": "2024-01-06T02:03:56+01:00",
          "tree_id": "02c1fbed3d9ef7ea216137bce8b87a279c3a10ca",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/ddc9c5ffb361c9fed23b50adadbbcb2b9350f503"
        },
        "date": 1704503168709,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.46249554528015,
            "unit": "iter/sec",
            "range": "stddev: 0.001386768592079233",
            "extra": "mean: 3.295300126637192 msec\nrounds: 229"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1740.1073909318723,
            "unit": "iter/sec",
            "range": "stddev: 0.0005591438365509031",
            "extra": "mean: 574.6771752199007 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.53807285633724,
            "unit": "iter/sec",
            "range": "stddev: 0.004324574924223331",
            "extra": "mean: 282.63974220000705 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.659114195627938,
            "unit": "iter/sec",
            "range": "stddev: 0.012599476618643217",
            "extra": "mean: 85.7698091999983 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.4400336114723,
            "unit": "iter/sec",
            "range": "stddev: 0.002151496253312929",
            "extra": "mean: 5.832943326797637 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.867058193137066,
            "unit": "iter/sec",
            "range": "stddev: 0.013007507910466325",
            "extra": "mean: 84.26688263636545 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "f823d1955407017b46b6ed3d14323bea9fe6097d",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/f823d1955407017b46b6ed3d14323bea9fe6097d"
        },
        "date": 1704503235159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.7180426219738,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972125692294132",
            "extra": "mean: 3.2709878403759087 msec\nrounds: 213"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.9162682696822,
            "unit": "iter/sec",
            "range": "stddev: 0.000015016403811809908",
            "extra": "mean: 573.0934017777447 usec\nrounds: 1125"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.198678465735977,
            "unit": "iter/sec",
            "range": "stddev: 0.01747955984547521",
            "extra": "mean: 312.62910940000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.93221032287636,
            "unit": "iter/sec",
            "range": "stddev: 0.011513716433287953",
            "extra": "mean: 71.77611999999911 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.7297367941233,
            "unit": "iter/sec",
            "range": "stddev: 0.002006178462880481",
            "extra": "mean: 5.891719500001156 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.767604361420458,
            "unit": "iter/sec",
            "range": "stddev: 0.011574815290957887",
            "extra": "mean: 72.63427781249999 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "f823d1955407017b46b6ed3d14323bea9fe6097d",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/f823d1955407017b46b6ed3d14323bea9fe6097d"
        },
        "date": 1704503235159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.7180426219738,
            "unit": "iter/sec",
            "range": "stddev: 0.00013972125692294132",
            "extra": "mean: 3.2709878403759087 msec\nrounds: 213"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.9162682696822,
            "unit": "iter/sec",
            "range": "stddev: 0.000015016403811809908",
            "extra": "mean: 573.0934017777447 usec\nrounds: 1125"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.198678465735977,
            "unit": "iter/sec",
            "range": "stddev: 0.01747955984547521",
            "extra": "mean: 312.62910940000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.93221032287636,
            "unit": "iter/sec",
            "range": "stddev: 0.011513716433287953",
            "extra": "mean: 71.77611999999911 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.7297367941233,
            "unit": "iter/sec",
            "range": "stddev: 0.002006178462880481",
            "extra": "mean: 5.891719500001156 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.767604361420458,
            "unit": "iter/sec",
            "range": "stddev: 0.011574815290957887",
            "extra": "mean: 72.63427781249999 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "3093d2b31aa3e2bd1e6196bfe81769742665346b",
          "message": "give names to test jobs",
          "timestamp": "2024-01-06T02:06:09+01:00",
          "tree_id": "05ca8fcdff2515de26747e162da47e829e4c13bd",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3093d2b31aa3e2bd1e6196bfe81769742665346b"
        },
        "date": 1704503242404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.8161739928231,
            "unit": "iter/sec",
            "range": "stddev: 0.0013880114813918515",
            "extra": "mean: 3.217335787754374 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1805.2894717263978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014525784841137322",
            "extra": "mean: 553.9277859099795 usec\nrounds: 1462"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203221060952644,
            "unit": "iter/sec",
            "range": "stddev: 0.012197262674942755",
            "extra": "mean: 237.91277820000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.933099235327962,
            "unit": "iter/sec",
            "range": "stddev: 0.011906246710793461",
            "extra": "mean: 77.32098716666513 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.60838634435984,
            "unit": "iter/sec",
            "range": "stddev: 0.0016986893756964954",
            "extra": "mean: 5.662245268750432 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.55765041390068,
            "unit": "iter/sec",
            "range": "stddev: 0.011048854141115642",
            "extra": "mean: 73.75909316666689 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "3093d2b31aa3e2bd1e6196bfe81769742665346b",
          "message": "give names to test jobs",
          "timestamp": "2024-01-06T02:06:09+01:00",
          "tree_id": "05ca8fcdff2515de26747e162da47e829e4c13bd",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3093d2b31aa3e2bd1e6196bfe81769742665346b"
        },
        "date": 1704503242404,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.8161739928231,
            "unit": "iter/sec",
            "range": "stddev: 0.0013880114813918515",
            "extra": "mean: 3.217335787754374 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1805.2894717263978,
            "unit": "iter/sec",
            "range": "stddev: 0.000014525784841137322",
            "extra": "mean: 553.9277859099795 usec\nrounds: 1462"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203221060952644,
            "unit": "iter/sec",
            "range": "stddev: 0.012197262674942755",
            "extra": "mean: 237.91277820000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.933099235327962,
            "unit": "iter/sec",
            "range": "stddev: 0.011906246710793461",
            "extra": "mean: 77.32098716666513 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.60838634435984,
            "unit": "iter/sec",
            "range": "stddev: 0.0016986893756964954",
            "extra": "mean: 5.662245268750432 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.55765041390068,
            "unit": "iter/sec",
            "range": "stddev: 0.011048854141115642",
            "extra": "mean: 73.75909316666689 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b",
          "message": "remove redundant pdm install in 2.0 tests",
          "timestamp": "2024-01-06T02:09:54+01:00",
          "tree_id": "75d059d1d37e3b3a2c636110cc56b500ef84fc4d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b"
        },
        "date": 1704503440764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.59997707142855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011053829689863755",
            "extra": "mean: 3.441156500002762 msec\nrounds: 230"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1691.2178464905624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018888927280879356",
            "extra": "mean: 591.2898814751128 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.069039795345974,
            "unit": "iter/sec",
            "range": "stddev: 0.013827383571225458",
            "extra": "mean: 245.75822559999665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.516000305363008,
            "unit": "iter/sec",
            "range": "stddev: 0.010109687160134507",
            "extra": "mean: 73.98638483333049 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.49742213446714,
            "unit": "iter/sec",
            "range": "stddev: 0.0016542340290892096",
            "extra": "mean: 5.934808896969137 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.28324885827208,
            "unit": "iter/sec",
            "range": "stddev: 0.010357091812698557",
            "extra": "mean: 75.28278741666838 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b",
          "message": "remove redundant pdm install in 2.0 tests",
          "timestamp": "2024-01-06T02:09:54+01:00",
          "tree_id": "75d059d1d37e3b3a2c636110cc56b500ef84fc4d",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b0ca1ad66dedd425e160dbbe2250b655c2bc5b8b"
        },
        "date": 1704503440764,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.59997707142855,
            "unit": "iter/sec",
            "range": "stddev: 0.0011053829689863755",
            "extra": "mean: 3.441156500002762 msec\nrounds: 230"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1691.2178464905624,
            "unit": "iter/sec",
            "range": "stddev: 0.000018888927280879356",
            "extra": "mean: 591.2898814751128 usec\nrounds: 1139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.069039795345974,
            "unit": "iter/sec",
            "range": "stddev: 0.013827383571225458",
            "extra": "mean: 245.75822559999665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.516000305363008,
            "unit": "iter/sec",
            "range": "stddev: 0.010109687160134507",
            "extra": "mean: 73.98638483333049 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.49742213446714,
            "unit": "iter/sec",
            "range": "stddev: 0.0016542340290892096",
            "extra": "mean: 5.934808896969137 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.28324885827208,
            "unit": "iter/sec",
            "range": "stddev: 0.010357091812698557",
            "extra": "mean: 75.28278741666838 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "4df9b3ebd408eb5c4578a477ae9111f49e510d06",
          "message": "only test on ubuntu-latest",
          "timestamp": "2024-01-06T02:11:38+01:00",
          "tree_id": "0fd39af9cc04a3baabd2fe4c1303baea9b8721a5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4df9b3ebd408eb5c4578a477ae9111f49e510d06"
        },
        "date": 1704503548431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.2306721772933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013121913776321398",
            "extra": "mean: 3.2762107191480085 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1757.5170461415344,
            "unit": "iter/sec",
            "range": "stddev: 0.000014839160171101925",
            "extra": "mean: 568.9845240451052 usec\nrounds: 1414"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.353673786368423,
            "unit": "iter/sec",
            "range": "stddev: 0.009925199077333562",
            "extra": "mean: 229.6910722000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.976865138159571,
            "unit": "iter/sec",
            "range": "stddev: 0.008754079705332053",
            "extra": "mean: 71.54680181250406 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.36357080766527,
            "unit": "iter/sec",
            "range": "stddev: 0.0016032869226793119",
            "extra": "mean: 5.702438627329145 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.650880550732271,
            "unit": "iter/sec",
            "range": "stddev: 0.009508515440196022",
            "extra": "mean: 73.25534761538567 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "4df9b3ebd408eb5c4578a477ae9111f49e510d06",
          "message": "only test on ubuntu-latest",
          "timestamp": "2024-01-06T02:11:38+01:00",
          "tree_id": "0fd39af9cc04a3baabd2fe4c1303baea9b8721a5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4df9b3ebd408eb5c4578a477ae9111f49e510d06"
        },
        "date": 1704503548431,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.2306721772933,
            "unit": "iter/sec",
            "range": "stddev: 0.0013121913776321398",
            "extra": "mean: 3.2762107191480085 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1757.5170461415344,
            "unit": "iter/sec",
            "range": "stddev: 0.000014839160171101925",
            "extra": "mean: 568.9845240451052 usec\nrounds: 1414"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.353673786368423,
            "unit": "iter/sec",
            "range": "stddev: 0.009925199077333562",
            "extra": "mean: 229.6910722000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.976865138159571,
            "unit": "iter/sec",
            "range": "stddev: 0.008754079705332053",
            "extra": "mean: 71.54680181250406 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.36357080766527,
            "unit": "iter/sec",
            "range": "stddev: 0.0016032869226793119",
            "extra": "mean: 5.702438627329145 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.650880550732271,
            "unit": "iter/sec",
            "range": "stddev: 0.009508515440196022",
            "extra": "mean: 73.25534761538567 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b",
          "message": "merge coverages",
          "timestamp": "2024-01-06T02:17:52+01:00",
          "tree_id": "f25cef33ab5d11891489872520d4e2f9d7633a3c",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b"
        },
        "date": 1704503919183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.77828503428213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524337848427137",
            "extra": "mean: 3.176839215230781 msec\nrounds: 302"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1817.8198602530774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015795270629539344",
            "extra": "mean: 550.1095140751623 usec\nrounds: 1492"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 5.2470379952370685,
            "unit": "iter/sec",
            "range": "stddev: 0.006338356365049616",
            "extra": "mean: 190.58371616667102 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.340531030868977,
            "unit": "iter/sec",
            "range": "stddev: 0.006382522653477564",
            "extra": "mean: 65.1867916428545 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.22996955302497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011401410400222803",
            "extra": "mean: 5.548466786517393 msec\nrounds: 178"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.240941252058226,
            "unit": "iter/sec",
            "range": "stddev: 0.006454789112914441",
            "extra": "mean: 65.61274552941106 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b",
          "message": "merge coverages",
          "timestamp": "2024-01-06T02:17:52+01:00",
          "tree_id": "f25cef33ab5d11891489872520d4e2f9d7633a3c",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/28cf0fb592e4d0f30a1a900da4c7f38c5a2d5e4b"
        },
        "date": 1704503919183,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.77828503428213,
            "unit": "iter/sec",
            "range": "stddev: 0.0007524337848427137",
            "extra": "mean: 3.176839215230781 msec\nrounds: 302"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1817.8198602530774,
            "unit": "iter/sec",
            "range": "stddev: 0.000015795270629539344",
            "extra": "mean: 550.1095140751623 usec\nrounds: 1492"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 5.2470379952370685,
            "unit": "iter/sec",
            "range": "stddev: 0.006338356365049616",
            "extra": "mean: 190.58371616667102 msec\nrounds: 6"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.340531030868977,
            "unit": "iter/sec",
            "range": "stddev: 0.006382522653477564",
            "extra": "mean: 65.1867916428545 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.22996955302497,
            "unit": "iter/sec",
            "range": "stddev: 0.0011401410400222803",
            "extra": "mean: 5.548466786517393 msec\nrounds: 178"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.240941252058226,
            "unit": "iter/sec",
            "range": "stddev: 0.006454789112914441",
            "extra": "mean: 65.61274552941106 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "d6334d219aa80d13262cfa69972636f51d61f5e0",
          "message": "remove pdm install from publish script",
          "timestamp": "2024-01-06T02:31:44+01:00",
          "tree_id": "6551948ad45f08df88fa5f4ad329919741098135",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d6334d219aa80d13262cfa69972636f51d61f5e0"
        },
        "date": 1704504795901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.94274100664177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011539735742551157",
            "extra": "mean: 3.236845755759323 msec\nrounds: 217"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1820.853355435364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024926950211151592",
            "extra": "mean: 549.1930456754993 usec\nrounds: 1445"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.3600517136666,
            "unit": "iter/sec",
            "range": "stddev: 0.007214231656399887",
            "extra": "mean: 229.35507779999398 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.344432969865071,
            "unit": "iter/sec",
            "range": "stddev: 0.008668913568281084",
            "extra": "mean: 69.71345623077679 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.09813295968647,
            "unit": "iter/sec",
            "range": "stddev: 0.001987401448231605",
            "extra": "mean: 5.711083168603711 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.181450273137877,
            "unit": "iter/sec",
            "range": "stddev: 0.008817955003617399",
            "extra": "mean: 70.51464982352145 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "d6334d219aa80d13262cfa69972636f51d61f5e0",
          "message": "remove pdm install from publish script",
          "timestamp": "2024-01-06T02:31:44+01:00",
          "tree_id": "6551948ad45f08df88fa5f4ad329919741098135",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d6334d219aa80d13262cfa69972636f51d61f5e0"
        },
        "date": 1704504795901,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.94274100664177,
            "unit": "iter/sec",
            "range": "stddev: 0.0011539735742551157",
            "extra": "mean: 3.236845755759323 msec\nrounds: 217"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1820.853355435364,
            "unit": "iter/sec",
            "range": "stddev: 0.000024926950211151592",
            "extra": "mean: 549.1930456754993 usec\nrounds: 1445"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.3600517136666,
            "unit": "iter/sec",
            "range": "stddev: 0.007214231656399887",
            "extra": "mean: 229.35507779999398 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.344432969865071,
            "unit": "iter/sec",
            "range": "stddev: 0.008668913568281084",
            "extra": "mean: 69.71345623077679 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.09813295968647,
            "unit": "iter/sec",
            "range": "stddev: 0.001987401448231605",
            "extra": "mean: 5.711083168603711 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.181450273137877,
            "unit": "iter/sec",
            "range": "stddev: 0.008817955003617399",
            "extra": "mean: 70.51464982352145 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "9a6349ade4495461069a75af417d489b184bb699",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/9a6349ade4495461069a75af417d489b184bb699"
        },
        "date": 1704548647153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.9846903249345,
            "unit": "iter/sec",
            "range": "stddev: 0.0013219029545522415",
            "extra": "mean: 2.9587138962969353 msec\nrounds: 270"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2006.3090877499515,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980211315934465",
            "extra": "mean: 498.4276879897336 usec\nrounds: 1532"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.570650585060405,
            "unit": "iter/sec",
            "range": "stddev: 0.010419099310687394",
            "extra": "mean: 218.78723420000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.063965201105066,
            "unit": "iter/sec",
            "range": "stddev: 0.009200250688567923",
            "extra": "mean: 58.603026214284576 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.67508204590936,
            "unit": "iter/sec",
            "range": "stddev: 0.001823695076934299",
            "extra": "mean: 5.565602022346575 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.85554037082148,
            "unit": "iter/sec",
            "range": "stddev: 0.00943796124061081",
            "extra": "mean: 59.32767374999699 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "9a6349ade4495461069a75af417d489b184bb699",
          "message": "chore(deps): update dependency dev/sqlalchemy to v2",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/2/commits/9a6349ade4495461069a75af417d489b184bb699"
        },
        "date": 1704548647153,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.9846903249345,
            "unit": "iter/sec",
            "range": "stddev: 0.0013219029545522415",
            "extra": "mean: 2.9587138962969353 msec\nrounds: 270"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2006.3090877499515,
            "unit": "iter/sec",
            "range": "stddev: 0.00000980211315934465",
            "extra": "mean: 498.4276879897336 usec\nrounds: 1532"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.570650585060405,
            "unit": "iter/sec",
            "range": "stddev: 0.010419099310687394",
            "extra": "mean: 218.78723420000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.063965201105066,
            "unit": "iter/sec",
            "range": "stddev: 0.009200250688567923",
            "extra": "mean: 58.603026214284576 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.67508204590936,
            "unit": "iter/sec",
            "range": "stddev: 0.001823695076934299",
            "extra": "mean: 5.565602022346575 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.85554037082148,
            "unit": "iter/sec",
            "range": "stddev: 0.00943796124061081",
            "extra": "mean: 59.32767374999699 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ede37a5264447b77ab877cefd0ec13998df4e7a",
          "message": "add missing py.typed marker",
          "timestamp": "2024-01-08T09:42:47+01:00",
          "tree_id": "a753baae4b8a12a57898bb7f9eeedc1c82398411",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3ede37a5264447b77ab877cefd0ec13998df4e7a"
        },
        "date": 1704703413580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.53273068920953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384272183364228",
            "extra": "mean: 3.4301465829785567 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.4917681419356,
            "unit": "iter/sec",
            "range": "stddev: 0.00002593746505124345",
            "extra": "mean: 573.2328568481028 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.998775162371685,
            "unit": "iter/sec",
            "range": "stddev: 0.010010235647176962",
            "extra": "mean: 250.07657579999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.048067061824048,
            "unit": "iter/sec",
            "range": "stddev: 0.010893547399805149",
            "extra": "mean: 76.6397042000032 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.57257104497407,
            "unit": "iter/sec",
            "range": "stddev: 0.0021716595896523402",
            "extra": "mean: 5.897180150289635 msec\nrounds: 173"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.369984903760894,
            "unit": "iter/sec",
            "range": "stddev: 0.009305003697002118",
            "extra": "mean: 74.7944000833319 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3ede37a5264447b77ab877cefd0ec13998df4e7a",
          "message": "add missing py.typed marker",
          "timestamp": "2024-01-08T09:42:47+01:00",
          "tree_id": "a753baae4b8a12a57898bb7f9eeedc1c82398411",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/3ede37a5264447b77ab877cefd0ec13998df4e7a"
        },
        "date": 1704703413580,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.53273068920953,
            "unit": "iter/sec",
            "range": "stddev: 0.0012384272183364228",
            "extra": "mean: 3.4301465829785567 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1744.4917681419356,
            "unit": "iter/sec",
            "range": "stddev: 0.00002593746505124345",
            "extra": "mean: 573.2328568481028 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.998775162371685,
            "unit": "iter/sec",
            "range": "stddev: 0.010010235647176962",
            "extra": "mean: 250.07657579999997 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.048067061824048,
            "unit": "iter/sec",
            "range": "stddev: 0.010893547399805149",
            "extra": "mean: 76.6397042000032 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.57257104497407,
            "unit": "iter/sec",
            "range": "stddev: 0.0021716595896523402",
            "extra": "mean: 5.897180150289635 msec\nrounds: 173"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.369984903760894,
            "unit": "iter/sec",
            "range": "stddev: 0.009305003697002118",
            "extra": "mean: 74.7944000833319 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "67ca0061a0b1c6c7351c0b85be648ecaedcdd518",
          "message": "pre-commit fix",
          "timestamp": "2024-01-08T18:51:10+01:00",
          "tree_id": "48cd03684c1c4d32d3dabe1b5732aef6c86783d5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/67ca0061a0b1c6c7351c0b85be648ecaedcdd518"
        },
        "date": 1704736322756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 325.05065108806843,
            "unit": "iter/sec",
            "range": "stddev: 0.001246066535913128",
            "extra": "mean: 3.076443614718564 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1864.3308287370185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163579186144175",
            "extra": "mean: 536.3854872675388 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.948451833634105,
            "unit": "iter/sec",
            "range": "stddev: 0.017841666917469547",
            "extra": "mean: 253.26382139999737 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.743859672993834,
            "unit": "iter/sec",
            "range": "stddev: 0.017496027130011287",
            "extra": "mean: 72.7597649999994 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.98963632200568,
            "unit": "iter/sec",
            "range": "stddev: 0.003292176177724917",
            "extra": "mean: 6.060986752212289 msec\nrounds: 113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.738102790327096,
            "unit": "iter/sec",
            "range": "stddev: 0.01819623570472296",
            "extra": "mean: 78.50462635294227 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "67ca0061a0b1c6c7351c0b85be648ecaedcdd518",
          "message": "pre-commit fix",
          "timestamp": "2024-01-08T18:51:10+01:00",
          "tree_id": "48cd03684c1c4d32d3dabe1b5732aef6c86783d5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/67ca0061a0b1c6c7351c0b85be648ecaedcdd518"
        },
        "date": 1704736322756,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 325.05065108806843,
            "unit": "iter/sec",
            "range": "stddev: 0.001246066535913128",
            "extra": "mean: 3.076443614718564 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1864.3308287370185,
            "unit": "iter/sec",
            "range": "stddev: 0.0000163579186144175",
            "extra": "mean: 536.3854872675388 usec\nrounds: 1453"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.948451833634105,
            "unit": "iter/sec",
            "range": "stddev: 0.017841666917469547",
            "extra": "mean: 253.26382139999737 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.743859672993834,
            "unit": "iter/sec",
            "range": "stddev: 0.017496027130011287",
            "extra": "mean: 72.7597649999994 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.98963632200568,
            "unit": "iter/sec",
            "range": "stddev: 0.003292176177724917",
            "extra": "mean: 6.060986752212289 msec\nrounds: 113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.738102790327096,
            "unit": "iter/sec",
            "range": "stddev: 0.01819623570472296",
            "extra": "mean: 78.50462635294227 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d"
        },
        "date": 1704743116917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.1899517679073,
            "unit": "iter/sec",
            "range": "stddev: 0.0012186834473829776",
            "extra": "mean: 3.2553148117147233 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1787.4319732403314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940491051146442",
            "extra": "mean: 559.4618508402075 usec\nrounds: 1428"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203674655315292,
            "unit": "iter/sec",
            "range": "stddev: 0.009876973611384112",
            "extra": "mean: 237.8871064000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.8040876622973,
            "unit": "iter/sec",
            "range": "stddev: 0.01301772041086996",
            "extra": "mean: 72.44231016666684 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.6646741950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0026651933139128867",
            "extra": "mean: 5.928923793749696 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017142146754667,
            "unit": "iter/sec",
            "range": "stddev: 0.011578611863971315",
            "extra": "mean: 71.34121845454254 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/07c8a2ca99f42d09a6ea7e58fced17bbd5586d3d"
        },
        "date": 1704743116917,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.1899517679073,
            "unit": "iter/sec",
            "range": "stddev: 0.0012186834473829776",
            "extra": "mean: 3.2553148117147233 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1787.4319732403314,
            "unit": "iter/sec",
            "range": "stddev: 0.0004940491051146442",
            "extra": "mean: 559.4618508402075 usec\nrounds: 1428"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.203674655315292,
            "unit": "iter/sec",
            "range": "stddev: 0.009876973611384112",
            "extra": "mean: 237.8871064000066 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.8040876622973,
            "unit": "iter/sec",
            "range": "stddev: 0.01301772041086996",
            "extra": "mean: 72.44231016666684 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.6646741950378,
            "unit": "iter/sec",
            "range": "stddev: 0.0026651933139128867",
            "extra": "mean: 5.928923793749696 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.017142146754667,
            "unit": "iter/sec",
            "range": "stddev: 0.011578611863971315",
            "extra": "mean: 71.34121845454254 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "54850ed84a25dc8e6265b08998f8085a759bc33f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/54850ed84a25dc8e6265b08998f8085a759bc33f"
        },
        "date": 1705346439563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.9112919355889,
            "unit": "iter/sec",
            "range": "stddev: 0.0011335421778783427",
            "extra": "mean: 3.279642395832442 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1728.2107481264943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416247426255946",
            "extra": "mean: 578.6331331893824 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.116920468857678,
            "unit": "iter/sec",
            "range": "stddev: 0.014510710716704496",
            "extra": "mean: 242.90000440000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.147189486437256,
            "unit": "iter/sec",
            "range": "stddev: 0.011563587145714167",
            "extra": "mean: 76.06188387499913 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.2043675477185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020935180333571933",
            "extra": "mean: 5.840972484076831 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.028639861501112,
            "unit": "iter/sec",
            "range": "stddev: 0.011124045937749367",
            "extra": "mean: 76.753982812507 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "54850ed84a25dc8e6265b08998f8085a759bc33f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/54850ed84a25dc8e6265b08998f8085a759bc33f"
        },
        "date": 1705346439563,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.9112919355889,
            "unit": "iter/sec",
            "range": "stddev: 0.0011335421778783427",
            "extra": "mean: 3.279642395832442 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1728.2107481264943,
            "unit": "iter/sec",
            "range": "stddev: 0.0005416247426255946",
            "extra": "mean: 578.6331331893824 usec\nrounds: 1389"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.116920468857678,
            "unit": "iter/sec",
            "range": "stddev: 0.014510710716704496",
            "extra": "mean: 242.90000440000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.147189486437256,
            "unit": "iter/sec",
            "range": "stddev: 0.011563587145714167",
            "extra": "mean: 76.06188387499913 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.2043675477185,
            "unit": "iter/sec",
            "range": "stddev: 0.0020935180333571933",
            "extra": "mean: 5.840972484076831 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.028639861501112,
            "unit": "iter/sec",
            "range": "stddev: 0.011124045937749367",
            "extra": "mean: 76.753982812507 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "e42d803ff90df73ca06ba2bcc6983b6485dbf05e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/e42d803ff90df73ca06ba2bcc6983b6485dbf05e"
        },
        "date": 1705951648806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.8334784826381,
            "unit": "iter/sec",
            "range": "stddev: 0.0013705817033131363",
            "extra": "mean: 3.3351846000009138 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.083980572055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015194871005291838",
            "extra": "mean: 574.0251395180306 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.971046814933669,
            "unit": "iter/sec",
            "range": "stddev: 0.01448562872819382",
            "extra": "mean: 251.82276780000734 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.574805862487338,
            "unit": "iter/sec",
            "range": "stddev: 0.011998085225578407",
            "extra": "mean: 79.52409054545808 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.22266499169245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015340988176658734",
            "extra": "mean: 5.739781331250349 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.13752093694752,
            "unit": "iter/sec",
            "range": "stddev: 0.012568466982519904",
            "extra": "mean: 82.38914727272893 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "e42d803ff90df73ca06ba2bcc6983b6485dbf05e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/e42d803ff90df73ca06ba2bcc6983b6485dbf05e"
        },
        "date": 1705951648806,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.8334784826381,
            "unit": "iter/sec",
            "range": "stddev: 0.0013705817033131363",
            "extra": "mean: 3.3351846000009138 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.083980572055,
            "unit": "iter/sec",
            "range": "stddev: 0.000015194871005291838",
            "extra": "mean: 574.0251395180306 usec\nrounds: 1369"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.971046814933669,
            "unit": "iter/sec",
            "range": "stddev: 0.01448562872819382",
            "extra": "mean: 251.82276780000734 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.574805862487338,
            "unit": "iter/sec",
            "range": "stddev: 0.011998085225578407",
            "extra": "mean: 79.52409054545808 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.22266499169245,
            "unit": "iter/sec",
            "range": "stddev: 0.0015340988176658734",
            "extra": "mean: 5.739781331250349 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.13752093694752,
            "unit": "iter/sec",
            "range": "stddev: 0.012568466982519904",
            "extra": "mean: 82.38914727272893 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "2e57bf8aad38b331462ed8d07a30dbfe6e308b55",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/10/commits/2e57bf8aad38b331462ed8d07a30dbfe6e308b55"
        },
        "date": 1706181661544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.13233004725066,
            "unit": "iter/sec",
            "range": "stddev: 0.0017808295696648971",
            "extra": "mean: 3.3998302731269145 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1690.0051564725889,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619305031520113",
            "extra": "mean: 591.7141709124836 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.675535442832819,
            "unit": "iter/sec",
            "range": "stddev: 0.014346976171545862",
            "extra": "mean: 272.0692034000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.493107622818972,
            "unit": "iter/sec",
            "range": "stddev: 0.01617425083046361",
            "extra": "mean: 87.00866926666133 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.84393590842305,
            "unit": "iter/sec",
            "range": "stddev: 0.002163744776105302",
            "extra": "mean: 5.9226290516135345 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.249611823442443,
            "unit": "iter/sec",
            "range": "stddev: 0.014727710223678359",
            "extra": "mean: 81.63523990909414 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "2e57bf8aad38b331462ed8d07a30dbfe6e308b55",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/10/commits/2e57bf8aad38b331462ed8d07a30dbfe6e308b55"
        },
        "date": 1706181661544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.13233004725066,
            "unit": "iter/sec",
            "range": "stddev: 0.0017808295696648971",
            "extra": "mean: 3.3998302731269145 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1690.0051564725889,
            "unit": "iter/sec",
            "range": "stddev: 0.0008619305031520113",
            "extra": "mean: 591.7141709124836 usec\nrounds: 1217"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.675535442832819,
            "unit": "iter/sec",
            "range": "stddev: 0.014346976171545862",
            "extra": "mean: 272.0692034000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.493107622818972,
            "unit": "iter/sec",
            "range": "stddev: 0.01617425083046361",
            "extra": "mean: 87.00866926666133 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.84393590842305,
            "unit": "iter/sec",
            "range": "stddev: 0.002163744776105302",
            "extra": "mean: 5.9226290516135345 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.249611823442443,
            "unit": "iter/sec",
            "range": "stddev: 0.014727710223678359",
            "extra": "mean: 81.63523990909414 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "2768e52c3d70c1671cd6cb8bb5d714f846c7f1f7",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/2768e52c3d70c1671cd6cb8bb5d714f846c7f1f7"
        },
        "date": 1706557292214,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 300.8565342185285,
            "unit": "iter/sec",
            "range": "stddev: 0.0011763920847215237",
            "extra": "mean: 3.32384338135613 msec\nrounds: 236"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1695.006034661617,
            "unit": "iter/sec",
            "range": "stddev: 0.00047054200453307195",
            "extra": "mean: 589.9684010267464 usec\nrounds: 1364"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.37073625117708,
            "unit": "iter/sec",
            "range": "stddev: 0.010123674421044013",
            "extra": "mean: 228.79440500000214 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.028469831819354,
            "unit": "iter/sec",
            "range": "stddev: 0.01048796726956136",
            "extra": "mean: 76.75498449999907 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.07256874454134,
            "unit": "iter/sec",
            "range": "stddev: 0.0016745058473752004",
            "extra": "mean: 5.744730529412369 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.434348573660076,
            "unit": "iter/sec",
            "range": "stddev: 0.008967289772685925",
            "extra": "mean: 74.43606175000106 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7853d8d5536139a920a1459491a010461fe8627e",
          "message": "chore(deps): update pdm-project/setup-pdm action to v4 (#10)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-01-30T22:16:13+01:00",
          "tree_id": "25ba3a63bd29c8b9cd884f1f855700115d832e7a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7853d8d5536139a920a1459491a010461fe8627e"
        },
        "date": 1706649435635,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.8451255429296,
            "unit": "iter/sec",
            "range": "stddev: 0.00004387811938149913",
            "extra": "mean: 3.0317258693879023 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1866.222985239883,
            "unit": "iter/sec",
            "range": "stddev: 0.000017262708640356327",
            "extra": "mean: 535.8416480287112 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.1251208425633767,
            "unit": "iter/sec",
            "range": "stddev: 0.01613233759637658",
            "extra": "mean: 319.98762620000036 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 10.84228744424982,
            "unit": "iter/sec",
            "range": "stddev: 0.01863915281967208",
            "extra": "mean: 92.23145993333239 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.69217140419067,
            "unit": "iter/sec",
            "range": "stddev: 0.00035319356172528577",
            "extra": "mean: 5.627709944099518 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.578089573010034,
            "unit": "iter/sec",
            "range": "stddev: 0.016494349409603756",
            "extra": "mean: 86.37003485714294 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "a8e4749fa45df00a27fbf48089bc96c73623bc6e",
          "message": "merge coverages",
          "timestamp": "2024-01-30T22:29:13+01:00",
          "tree_id": "4b86fa4c544a627cbee22342a3b860e8c7911e14",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/a8e4749fa45df00a27fbf48089bc96c73623bc6e"
        },
        "date": 1706650206150,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 309.51518419180513,
            "unit": "iter/sec",
            "range": "stddev: 0.0014379601562373601",
            "extra": "mean: 3.2308592633707582 msec\nrounds: 243"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1742.3662851101212,
            "unit": "iter/sec",
            "range": "stddev: 0.0005997839163310978",
            "extra": "mean: 573.932133872068 usec\nrounds: 1113"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.230985372933855,
            "unit": "iter/sec",
            "range": "stddev: 0.012031775007064382",
            "extra": "mean: 236.35156160007682 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.18160642330591,
            "unit": "iter/sec",
            "range": "stddev: 0.013838703936669989",
            "extra": "mean: 75.86328766666384 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.6083009793411,
            "unit": "iter/sec",
            "range": "stddev: 0.00227909952269278",
            "extra": "mean: 5.760093234936947 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.4678736084523,
            "unit": "iter/sec",
            "range": "stddev: 0.013680553114275995",
            "extra": "mean: 74.2507710625091 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d858437c2e0a6d20ef7d55a8b94aa651f1488243",
          "message": "chore(deps): update actions/download-artifact action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/11/commits/d858437c2e0a6d20ef7d55a8b94aa651f1488243"
        },
        "date": 1706650233691,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.32227804521676,
            "unit": "iter/sec",
            "range": "stddev: 0.0016503795452437573",
            "extra": "mean: 3.517135578946671 msec\nrounds: 171"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1685.5976333538365,
            "unit": "iter/sec",
            "range": "stddev: 0.000011074604271654716",
            "extra": "mean: 593.2613929994066 usec\nrounds: 1257"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.872756234733309,
            "unit": "iter/sec",
            "range": "stddev: 0.011919558910088831",
            "extra": "mean: 258.2140314000071 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.117245801503866,
            "unit": "iter/sec",
            "range": "stddev: 0.012510615310029971",
            "extra": "mean: 82.52700459999667 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 163.29155230450024,
            "unit": "iter/sec",
            "range": "stddev: 0.0016628252455736295",
            "extra": "mean: 6.124015516339974 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.231277104614042,
            "unit": "iter/sec",
            "range": "stddev: 0.013517750801733544",
            "extra": "mean: 81.75761136363815 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "6308bf7261c0df9e5b7b2428022b79e847c817bd",
          "message": "chore(deps): update actions/upload-artifact action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/12/commits/6308bf7261c0df9e5b7b2428022b79e847c817bd"
        },
        "date": 1706650236645,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.57241600736467,
            "unit": "iter/sec",
            "range": "stddev: 0.0012863868987213255",
            "extra": "mean: 3.2198609678725845 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1839.6892019750987,
            "unit": "iter/sec",
            "range": "stddev: 0.0000144607866481076",
            "extra": "mean: 543.5700763620265 usec\nrounds: 1100"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.299117563472915,
            "unit": "iter/sec",
            "range": "stddev: 0.011900538983301009",
            "extra": "mean: 232.60587439999654 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.625767412188019,
            "unit": "iter/sec",
            "range": "stddev: 0.010549221176141209",
            "extra": "mean: 68.37248069230711 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.56096962964932,
            "unit": "iter/sec",
            "range": "stddev: 0.002103554329943729",
            "extra": "mean: 5.663765905327658 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.1264524354095,
            "unit": "iter/sec",
            "range": "stddev: 0.011848633515202904",
            "extra": "mean: 70.78918111764499 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "c2da61441ace18cd27376e5fa00224f551534362",
          "message": "define pytest args in noxfile",
          "timestamp": "2024-01-30T22:37:11+01:00",
          "tree_id": "da26f8cb6fe6ce4788c232cb1f20767f30821382",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/c2da61441ace18cd27376e5fa00224f551534362"
        },
        "date": 1706650681871,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.27465421365594,
            "unit": "iter/sec",
            "range": "stddev: 0.0012240659154996757",
            "extra": "mean: 3.3981859656657947 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1755.9988387330343,
            "unit": "iter/sec",
            "range": "stddev: 0.00003729404833753922",
            "extra": "mean: 569.4764586071749 usec\nrounds: 761"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.404763197454988,
            "unit": "iter/sec",
            "range": "stddev: 0.0061883017901831336",
            "extra": "mean: 227.02696040000205 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.778709274149586,
            "unit": "iter/sec",
            "range": "stddev: 0.008829372594204972",
            "extra": "mean: 72.57573841666816 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.77653037180673,
            "unit": "iter/sec",
            "range": "stddev: 0.0017316928750464925",
            "extra": "mean: 5.787823136904349 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.613507485488984,
            "unit": "iter/sec",
            "range": "stddev: 0.009227469845552469",
            "extra": "mean: 73.45645500000113 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7050a93ec51632ad9315d848f1e95490bca4173c",
          "message": "fix ci",
          "timestamp": "2024-01-30T22:39:14+01:00",
          "tree_id": "eddbba5b509caa6fb69cd31d02d20399cc8e806e",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7050a93ec51632ad9315d848f1e95490bca4173c"
        },
        "date": 1706650798545,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.2308960371052,
            "unit": "iter/sec",
            "range": "stddev: 0.0007848740129759671",
            "extra": "mean: 3.518266359999984 msec\nrounds: 275"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1637.6442297496583,
            "unit": "iter/sec",
            "range": "stddev: 0.000011243196686406117",
            "extra": "mean: 610.6332387913503 usec\nrounds: 1026"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9931263855759487,
            "unit": "iter/sec",
            "range": "stddev: 0.011548271532586342",
            "extra": "mean: 250.43034039999839 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.834561004441982,
            "unit": "iter/sec",
            "range": "stddev: 0.006930168927698991",
            "extra": "mean: 77.91462440000127 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.18148061929364,
            "unit": "iter/sec",
            "range": "stddev: 0.001450858680346181",
            "extra": "mean: 6.017517693748964 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.937004115535554,
            "unit": "iter/sec",
            "range": "stddev: 0.006668027225039864",
            "extra": "mean: 77.29764875000218 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "b103945ec170e7319ec7e48eade2879781c8ec49",
          "message": "chore(deps): update codecov/codecov-action action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/13/commits/b103945ec170e7319ec7e48eade2879781c8ec49"
        },
        "date": 1706725946610,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 280.06024054676595,
            "unit": "iter/sec",
            "range": "stddev: 0.0012412325591360913",
            "extra": "mean: 3.570660362383766 msec\nrounds: 218"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1613.5480580911444,
            "unit": "iter/sec",
            "range": "stddev: 0.0006062431618130235",
            "extra": "mean: 619.7522255290105 usec\nrounds: 1042"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.598840538799087,
            "unit": "iter/sec",
            "range": "stddev: 0.010982392968238643",
            "extra": "mean: 277.86727119998886 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.211761911910806,
            "unit": "iter/sec",
            "range": "stddev: 0.010939821657409567",
            "extra": "mean: 81.88826536362822 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.76146685051006,
            "unit": "iter/sec",
            "range": "stddev: 0.0020265056613288555",
            "extra": "mean: 6.143960357143134 msec\nrounds: 140"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.312902838863705,
            "unit": "iter/sec",
            "range": "stddev: 0.011663264782153984",
            "extra": "mean: 81.21561690908989 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "4c29c486c8da8777ec0b2ca534aa56ab75ab6b05",
          "message": "just upload coverage files from each job",
          "timestamp": "2024-02-02T19:12:29+01:00",
          "tree_id": "e93faeb22ce4f7835b06478c5a3a64beeb3f7f50",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4c29c486c8da8777ec0b2ca534aa56ab75ab6b05"
        },
        "date": 1706897601503,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 278.4743433739857,
            "unit": "iter/sec",
            "range": "stddev: 0.0013842967165937556",
            "extra": "mean: 3.5909950909086774 msec\nrounds: 220"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1671.2175473046686,
            "unit": "iter/sec",
            "range": "stddev: 0.000015775289498711957",
            "extra": "mean: 598.3661442597913 usec\nrounds: 1324"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7181649305741273,
            "unit": "iter/sec",
            "range": "stddev: 0.0037372981484760474",
            "extra": "mean: 268.94987680000213 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.9284807775849,
            "unit": "iter/sec",
            "range": "stddev: 0.011575456734453862",
            "extra": "mean: 83.83297241666554 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.3322584897468,
            "unit": "iter/sec",
            "range": "stddev: 0.0016833788957055194",
            "extra": "mean: 6.012062897959405 msec\nrounds: 147"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.208677541184564,
            "unit": "iter/sec",
            "range": "stddev: 0.009638628153226697",
            "extra": "mean: 81.90895341666742 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "6702635b935f1a9fe5bb086625aad958337ef2db",
          "message": "specify paths for coverage upload",
          "timestamp": "2024-02-03T11:44:38+01:00",
          "tree_id": "432ce30de619c18f7269e9afdfb205a80d024434",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/6702635b935f1a9fe5bb086625aad958337ef2db"
        },
        "date": 1706958669121,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.67302994437233,
            "unit": "iter/sec",
            "range": "stddev: 0.0010302134677079744",
            "extra": "mean: 3.188033093496571 msec\nrounds: 246"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1845.1813747398326,
            "unit": "iter/sec",
            "range": "stddev: 0.000014876864538401575",
            "extra": "mean: 541.9521428569581 usec\nrounds: 63"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.082395144497172,
            "unit": "iter/sec",
            "range": "stddev: 0.008764632902736144",
            "extra": "mean: 244.95424000000128 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.899612156527178,
            "unit": "iter/sec",
            "range": "stddev: 0.009076088520869408",
            "extra": "mean: 71.94445346666782 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.03712288653745,
            "unit": "iter/sec",
            "range": "stddev: 0.0020950520707005843",
            "extra": "mean: 5.6806199942527895 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.810377420732062,
            "unit": "iter/sec",
            "range": "stddev: 0.008822829584881967",
            "extra": "mean: 72.40931724999822 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "2ec8521c37ddc7e60a5fde23057b5ce1e2e777dc",
          "message": "revert to codecov v3 for now",
          "timestamp": "2024-02-03T12:15:35+01:00",
          "tree_id": "896acf80fb39ead981b4f42562275917d7f7d7fe",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/2ec8521c37ddc7e60a5fde23057b5ce1e2e777dc"
        },
        "date": 1706958987792,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 320.3466514514925,
            "unit": "iter/sec",
            "range": "stddev: 0.001230636918439144",
            "extra": "mean: 3.121618395163472 msec\nrounds: 248"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1904.2155397586346,
            "unit": "iter/sec",
            "range": "stddev: 0.000009073470619779747",
            "extra": "mean: 525.1506350624327 usec\nrounds: 1466"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.638912686665294,
            "unit": "iter/sec",
            "range": "stddev: 0.007844897195408557",
            "extra": "mean: 215.56775640001433 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.652086274969564,
            "unit": "iter/sec",
            "range": "stddev: 0.007299825797800005",
            "extra": "mean: 63.88924661111635 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 183.32762757654186,
            "unit": "iter/sec",
            "range": "stddev: 0.0016204199917649062",
            "extra": "mean: 5.454715217882182 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.422670639871303,
            "unit": "iter/sec",
            "range": "stddev: 0.008171536545941266",
            "extra": "mean: 64.83961327779122 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "75bc55fcd6fa54b28ce979c084fef94ee1a04a32",
          "message": "chore(deps): update codecov/codecov-action action to v4",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/13/commits/75bc55fcd6fa54b28ce979c084fef94ee1a04a32"
        },
        "date": 1706959011235,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.7707526958898,
            "unit": "iter/sec",
            "range": "stddev: 0.0010943093420175752",
            "extra": "mean: 3.2811547405857295 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1628.7067477839278,
            "unit": "iter/sec",
            "range": "stddev: 0.00046608032572938835",
            "extra": "mean: 613.9840713256901 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.191342461926321,
            "unit": "iter/sec",
            "range": "stddev: 0.006962723196405388",
            "extra": "mean: 238.58704200000034 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.440960615777076,
            "unit": "iter/sec",
            "range": "stddev: 0.008631247766546418",
            "extra": "mean: 74.39944425000355 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.25738573235307,
            "unit": "iter/sec",
            "range": "stddev: 0.0003874145605536943",
            "extra": "mean: 5.641513869046528 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.394314555650594,
            "unit": "iter/sec",
            "range": "stddev: 0.009091126696205539",
            "extra": "mean: 74.65854231250191 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "da7cd73a661e8f52d6a23143d9ed072a08f07da4",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/da7cd73a661e8f52d6a23143d9ed072a08f07da4"
        },
        "date": 1707161642307,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 311.31992686108845,
            "unit": "iter/sec",
            "range": "stddev: 0.0009265417969195563",
            "extra": "mean: 3.2121297537314466 msec\nrounds: 268"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1825.089369412728,
            "unit": "iter/sec",
            "range": "stddev: 0.000008928376504114215",
            "extra": "mean: 547.9183741680425 usec\nrounds: 1502"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.292358137447673,
            "unit": "iter/sec",
            "range": "stddev: 0.010664199821409814",
            "extra": "mean: 232.97217239999952 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.321582658004836,
            "unit": "iter/sec",
            "range": "stddev: 0.006649854632730948",
            "extra": "mean: 69.8246851538482 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.7864391120151,
            "unit": "iter/sec",
            "range": "stddev: 0.001693274668093592",
            "extra": "mean: 5.721267651428792 msec\nrounds: 175"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.10917681371173,
            "unit": "iter/sec",
            "range": "stddev: 0.006999098688199567",
            "extra": "mean: 70.87585712500032 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "a8ee40117b44c9e5ff1bd87652782950ac860009",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/a8ee40117b44c9e5ff1bd87652782950ac860009"
        },
        "date": 1707779068629,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.9569795339935,
            "unit": "iter/sec",
            "range": "stddev: 0.001066262472883337",
            "extra": "mean: 3.077330425196763 msec\nrounds: 254"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1862.8442849415878,
            "unit": "iter/sec",
            "range": "stddev: 0.000013337831970925034",
            "extra": "mean: 536.8135211748826 usec\nrounds: 1464"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.414900795603008,
            "unit": "iter/sec",
            "range": "stddev: 0.008561759319527263",
            "extra": "mean: 226.50565579999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.261158960915726,
            "unit": "iter/sec",
            "range": "stddev: 0.010013288395961575",
            "extra": "mean: 65.52582294444538 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.9049735570956,
            "unit": "iter/sec",
            "range": "stddev: 0.0004538652927986457",
            "extra": "mean: 5.408183353657691 msec\nrounds: 164"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.126680783277598,
            "unit": "iter/sec",
            "range": "stddev: 0.01083843861745697",
            "extra": "mean: 66.10835611111001 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "1e7b046c5882fcedf40ae79cfb38adb8843aa307",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/1e7b046c5882fcedf40ae79cfb38adb8843aa307"
        },
        "date": 1708385085169,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 314.54853349744496,
            "unit": "iter/sec",
            "range": "stddev: 0.0010454726074025707",
            "extra": "mean: 3.179159632000392 msec\nrounds: 250"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1849.9055258990104,
            "unit": "iter/sec",
            "range": "stddev: 0.000016413549666108934",
            "extra": "mean: 540.56814577816 usec\nrounds: 1516"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.773914409687748,
            "unit": "iter/sec",
            "range": "stddev: 0.0071575718041168405",
            "extra": "mean: 264.9768626000025 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.833694931065354,
            "unit": "iter/sec",
            "range": "stddev: 0.011359584171484246",
            "extra": "mean: 77.91988241666796 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.30502914460666,
            "unit": "iter/sec",
            "range": "stddev: 0.0022979224805443504",
            "extra": "mean: 5.737069119046367 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.819710547686855,
            "unit": "iter/sec",
            "range": "stddev: 0.010449386172251262",
            "extra": "mean: 78.00488133333374 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "799c4583797c689dc6051055a973aadb1e434f70",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/799c4583797c689dc6051055a973aadb1e434f70"
        },
        "date": 1710294605574,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 318.53990293091243,
            "unit": "iter/sec",
            "range": "stddev: 0.0011184515654282714",
            "extra": "mean: 3.139324118576404 msec\nrounds: 253"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1869.3207906373875,
            "unit": "iter/sec",
            "range": "stddev: 0.000015692221815469355",
            "extra": "mean: 534.9536607138614 usec\nrounds: 56"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.064287921153442,
            "unit": "iter/sec",
            "range": "stddev: 0.013727215515313959",
            "extra": "mean: 246.04556059999823 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.378539186497408,
            "unit": "iter/sec",
            "range": "stddev: 0.010901646978228359",
            "extra": "mean: 69.5480943529423 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.56244350330175,
            "unit": "iter/sec",
            "range": "stddev: 0.0015385152105566852",
            "extra": "mean: 5.418220419161878 msec\nrounds: 167"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.033865982195039,
            "unit": "iter/sec",
            "range": "stddev: 0.01264483861129091",
            "extra": "mean: 71.25620276470603 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d6d5eb2e9642559dc244a2de01fac3739401ebdb",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d6d5eb2e9642559dc244a2de01fac3739401ebdb"
        },
        "date": 1710795906668,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 288.7375068520081,
            "unit": "iter/sec",
            "range": "stddev: 0.0012997222523693538",
            "extra": "mean: 3.463353309733149 msec\nrounds: 226"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1655.2491020865975,
            "unit": "iter/sec",
            "range": "stddev: 0.0005555373717437197",
            "extra": "mean: 604.1386754050528 usec\nrounds: 1297"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.170333348857022,
            "unit": "iter/sec",
            "range": "stddev: 0.008760855041198612",
            "extra": "mean: 239.7889847999977 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.697110493508633,
            "unit": "iter/sec",
            "range": "stddev: 0.010094246481481255",
            "extra": "mean: 78.75807653333784 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.1899304095564,
            "unit": "iter/sec",
            "range": "stddev: 0.0023328692870957677",
            "extra": "mean: 6.165610882715311 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.574759657596708,
            "unit": "iter/sec",
            "range": "stddev: 0.010636351750735693",
            "extra": "mean: 79.52438275000162 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "f520cc22d8d033fb17696c9409403a25d8176721",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/f520cc22d8d033fb17696c9409403a25d8176721"
        },
        "date": 1711399896331,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 321.81897546096764,
            "unit": "iter/sec",
            "range": "stddev: 0.0011412268411636495",
            "extra": "mean: 3.1073369696973843 msec\nrounds: 231"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1886.7524625050748,
            "unit": "iter/sec",
            "range": "stddev: 0.00001322621791300255",
            "extra": "mean: 530.0112335204176 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.848485299834657,
            "unit": "iter/sec",
            "range": "stddev: 0.012799708871852413",
            "extra": "mean: 206.2499808000041 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.441361464153836,
            "unit": "iter/sec",
            "range": "stddev: 0.01154135910165949",
            "extra": "mean: 64.76112888888963 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.53360162804123,
            "unit": "iter/sec",
            "range": "stddev: 0.0016537683815748803",
            "extra": "mean: 5.539135047337779 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.528052893227501,
            "unit": "iter/sec",
            "range": "stddev: 0.01056489884674468",
            "extra": "mean: 64.39957455555462 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "6199c944cfd08e7203b63f21da5e98b7b09b5ebd",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/6199c944cfd08e7203b63f21da5e98b7b09b5ebd"
        },
        "date": 1712005506558,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 289.6617960669686,
            "unit": "iter/sec",
            "range": "stddev: 0.001127673980709817",
            "extra": "mean: 3.45230200729959 msec\nrounds: 274"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1613.7277105843723,
            "unit": "iter/sec",
            "range": "stddev: 0.00003846763001477689",
            "extra": "mean: 619.6832299780452 usec\nrounds: 1361"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.23228798503363,
            "unit": "iter/sec",
            "range": "stddev: 0.007402238177260399",
            "extra": "mean: 236.2788174000059 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.890199829849575,
            "unit": "iter/sec",
            "range": "stddev: 0.010754736682602656",
            "extra": "mean: 77.57831633333723 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 168.30712119750032,
            "unit": "iter/sec",
            "range": "stddev: 0.0013474752435211164",
            "extra": "mean: 5.941519246987465 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.483457611036672,
            "unit": "iter/sec",
            "range": "stddev: 0.008302171967759078",
            "extra": "mean: 74.164952999998 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "77f1da97886b0e9d1fff8e846c8447f869be6705",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/77f1da97886b0e9d1fff8e846c8447f869be6705"
        },
        "date": 1712611478914,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.325087989105,
            "unit": "iter/sec",
            "range": "stddev: 0.0012834626283260494",
            "extra": "mean: 3.3408492643169243 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1656.317797555395,
            "unit": "iter/sec",
            "range": "stddev: 0.0004760943272814171",
            "extra": "mean: 603.7488708241424 usec\nrounds: 1347"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.221486339477878,
            "unit": "iter/sec",
            "range": "stddev: 0.013720115468260914",
            "extra": "mean: 236.88339120000137 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.056775266609081,
            "unit": "iter/sec",
            "range": "stddev: 0.009700722697498733",
            "extra": "mean: 76.5885894166658 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.82342241973458,
            "unit": "iter/sec",
            "range": "stddev: 0.0016704183324007418",
            "extra": "mean: 5.786252731249064 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.794745645052602,
            "unit": "iter/sec",
            "range": "stddev: 0.006770477658014246",
            "extra": "mean: 72.49136923076532 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "c3f83066913d62b5bc77e721289eb8d3e84f52bf",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/c3f83066913d62b5bc77e721289eb8d3e84f52bf"
        },
        "date": 1713215703581,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 334.0729154462098,
            "unit": "iter/sec",
            "range": "stddev: 0.0009452438391535499",
            "extra": "mean: 2.993358496795031 msec\nrounds: 312"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1818.0984352617538,
            "unit": "iter/sec",
            "range": "stddev: 0.000015415030372598568",
            "extra": "mean: 550.02522449013 usec\nrounds: 49"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.68904264814084,
            "unit": "iter/sec",
            "range": "stddev: 0.011917357747789455",
            "extra": "mean: 213.2631487999987 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.21877121218105,
            "unit": "iter/sec",
            "range": "stddev: 0.010447475905180515",
            "extra": "mean: 58.076153499999556 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 185.10108219211395,
            "unit": "iter/sec",
            "range": "stddev: 0.001803533561549876",
            "extra": "mean: 5.4024535575762505 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.9960250588884,
            "unit": "iter/sec",
            "range": "stddev: 0.010486789477052224",
            "extra": "mean: 58.83728674999986 msec\nrounds: 20"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d1932b76a0aba60fc95536572ac167ef8b115164",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d1932b76a0aba60fc95536572ac167ef8b115164"
        },
        "date": 1713818945224,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 341.49984126357566,
            "unit": "iter/sec",
            "range": "stddev: 0.0012716963469494994",
            "extra": "mean: 2.9282590477931794 msec\nrounds: 272"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1891.0497937937048,
            "unit": "iter/sec",
            "range": "stddev: 0.00001232781309799672",
            "extra": "mean: 528.8068052369277 usec\nrounds: 1566"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.48100303230731,
            "unit": "iter/sec",
            "range": "stddev: 0.009862488128416653",
            "extra": "mean: 223.16432119999945 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.0887349211629,
            "unit": "iter/sec",
            "range": "stddev: 0.010908075820011973",
            "extra": "mean: 62.155290947370496 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 189.44616885296918,
            "unit": "iter/sec",
            "range": "stddev: 0.0016057407225893315",
            "extra": "mean: 5.278544327682386 msec\nrounds: 177"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.30676732869762,
            "unit": "iter/sec",
            "range": "stddev: 0.00974522596550316",
            "extra": "mean: 61.32423305262597 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "78663c60e79286218019f0c8f24f3204da4256d3",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/78663c60e79286218019f0c8f24f3204da4256d3"
        },
        "date": 1714425741014,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 275.7931742104616,
            "unit": "iter/sec",
            "range": "stddev: 0.001217921864436241",
            "extra": "mean: 3.6259055462949425 msec\nrounds: 216"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1512.3995087616936,
            "unit": "iter/sec",
            "range": "stddev: 0.000604458182884762",
            "extra": "mean: 661.2009553076153 usec\nrounds: 1253"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8793317895061916,
            "unit": "iter/sec",
            "range": "stddev: 0.010602675662968748",
            "extra": "mean: 257.77635279999913 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.905196246004884,
            "unit": "iter/sec",
            "range": "stddev: 0.012355592428849628",
            "extra": "mean: 83.99693540000044 msec\nrounds: 10"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 161.26555195915083,
            "unit": "iter/sec",
            "range": "stddev: 0.0016267860260796515",
            "extra": "mean: 6.200952328946878 msec\nrounds: 152"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.25575215352599,
            "unit": "iter/sec",
            "range": "stddev: 0.011144253137288354",
            "extra": "mean: 81.59433933333086 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "a8869f514d9c37626e7e46cc233b22e1a3a5d527",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/a8869f514d9c37626e7e46cc233b22e1a3a5d527"
        },
        "date": 1715029181430,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.86830114253365,
            "unit": "iter/sec",
            "range": "stddev: 0.0013879816065717322",
            "extra": "mean: 3.2801048723411714 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1704.9123127484793,
            "unit": "iter/sec",
            "range": "stddev: 0.00001043200704844203",
            "extra": "mean: 586.540429394815 usec\nrounds: 1388"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.903205856209473,
            "unit": "iter/sec",
            "range": "stddev: 0.00930986644106304",
            "extra": "mean: 256.19965660000616 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.79492776308483,
            "unit": "iter/sec",
            "range": "stddev: 0.012917238243239563",
            "extra": "mean: 78.15597074999836 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.77660344716043,
            "unit": "iter/sec",
            "range": "stddev: 0.002031446696615314",
            "extra": "mean: 5.754514590360641 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.64315931472635,
            "unit": "iter/sec",
            "range": "stddev: 0.012210410528400035",
            "extra": "mean: 79.0941547999978 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "4203302cd77567b35702717fa4adf000fe947dd7",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/4203302cd77567b35702717fa4adf000fe947dd7"
        },
        "date": 1715633678477,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.7542213851379,
            "unit": "iter/sec",
            "range": "stddev: 0.001448845686688098",
            "extra": "mean: 3.18720811336108 msec\nrounds: 247"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1725.1359965680376,
            "unit": "iter/sec",
            "range": "stddev: 0.0005895321109084937",
            "extra": "mean: 579.6644449999227 usec\nrounds: 1400"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.715201156983512,
            "unit": "iter/sec",
            "range": "stddev: 0.012417785824133694",
            "extra": "mean: 212.08002940000483 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.703547635314964,
            "unit": "iter/sec",
            "range": "stddev: 0.009747473084706502",
            "extra": "mean: 63.679878153847696 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.60097051747607,
            "unit": "iter/sec",
            "range": "stddev: 0.0016815661434599581",
            "extra": "mean: 5.567898642856693 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.418880670879526,
            "unit": "iter/sec",
            "range": "stddev: 0.010609362624831394",
            "extra": "mean: 64.85555088889328 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "91a1f1e05e4684804e56ef9f4aabf4689c4811dc",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/91a1f1e05e4684804e56ef9f4aabf4689c4811dc"
        },
        "date": 1716843287108,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.4975612277042,
            "unit": "iter/sec",
            "range": "stddev: 0.0011264185903573157",
            "extra": "mean: 3.0816872589630555 msec\nrounds: 251"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1832.5007388612073,
            "unit": "iter/sec",
            "range": "stddev: 0.000008483615732890827",
            "extra": "mean: 545.7023720609477 usec\nrounds: 1446"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.576548171236784,
            "unit": "iter/sec",
            "range": "stddev: 0.006448458259977726",
            "extra": "mean: 218.50529319999623 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.272371699744955,
            "unit": "iter/sec",
            "range": "stddev: 0.006620822964180765",
            "extra": "mean: 61.45385678571204 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 188.9294593433364,
            "unit": "iter/sec",
            "range": "stddev: 0.00020046060840081962",
            "extra": "mean: 5.292980795455129 msec\nrounds: 176"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.200153501314954,
            "unit": "iter/sec",
            "range": "stddev: 0.007527456675460866",
            "extra": "mean: 61.72781016666483 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "bfa74081fdd3bdaa14785ff6a3d0aba45b57752b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/bfa74081fdd3bdaa14785ff6a3d0aba45b57752b"
        },
        "date": 1717449009436,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.4997533468879,
            "unit": "iter/sec",
            "range": "stddev: 0.0011751942314316853",
            "extra": "mean: 3.2414936775510643 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1696.0497980613886,
            "unit": "iter/sec",
            "range": "stddev: 0.0005886991752654976",
            "extra": "mean: 589.6053294797214 usec\nrounds: 1384"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.627341400737762,
            "unit": "iter/sec",
            "range": "stddev: 0.011262668464652091",
            "extra": "mean: 216.10681240000247 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.272390053858084,
            "unit": "iter/sec",
            "range": "stddev: 0.009754048779333262",
            "extra": "mean: 70.06534968750256 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.02904285371767,
            "unit": "iter/sec",
            "range": "stddev: 0.0003118414212616373",
            "extra": "mean: 5.554659315789111 msec\nrounds: 171"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.068095065016939,
            "unit": "iter/sec",
            "range": "stddev: 0.00986055529733651",
            "extra": "mean: 71.08282929411637 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "0a84e1b7522fdefea34fd3b5c402110991fee923",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-01-05T20:00:05Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/0a84e1b7522fdefea34fd3b5c402110991fee923"
        },
        "date": 1718054020312,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 270.89428293856975,
            "unit": "iter/sec",
            "range": "stddev: 0.0012740953359096367",
            "extra": "mean: 3.691476944999863 msec\nrounds: 200"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1584.871827098131,
            "unit": "iter/sec",
            "range": "stddev: 0.000013121850506846115",
            "extra": "mean: 630.9658502990619 usec\nrounds: 1002"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.130301977058488,
            "unit": "iter/sec",
            "range": "stddev: 0.00721691588400727",
            "extra": "mean: 242.1130478000009 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.189832574297023,
            "unit": "iter/sec",
            "range": "stddev: 0.007304355663517277",
            "extra": "mean: 75.8159737333358 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 159.32323476160008,
            "unit": "iter/sec",
            "range": "stddev: 0.0016088380342998228",
            "extra": "mean: 6.276548436242389 msec\nrounds: 149"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.135365280935668,
            "unit": "iter/sec",
            "range": "stddev: 0.008756061090859378",
            "extra": "mean: 76.13035333333092 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "75ef1e0f9c15e5c4fe35decb4f0f60270a5d2d89",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/75ef1e0f9c15e5c4fe35decb4f0f60270a5d2d89"
        },
        "date": 1718658723275,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 290.285628221107,
            "unit": "iter/sec",
            "range": "stddev: 0.0013630205570047402",
            "extra": "mean: 3.4448829111109562 msec\nrounds: 225"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1627.2968178632052,
            "unit": "iter/sec",
            "range": "stddev: 0.0005770064369570343",
            "extra": "mean: 614.5160422012591 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.054715531578919,
            "unit": "iter/sec",
            "range": "stddev: 0.011814684233880499",
            "extra": "mean: 246.62642600000027 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.113843066067178,
            "unit": "iter/sec",
            "range": "stddev: 0.011770253932084026",
            "extra": "mean: 76.2552971666679 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.1423025358671,
            "unit": "iter/sec",
            "range": "stddev: 0.0018487825248033097",
            "extra": "mean: 5.912181547770684 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.983602627390011,
            "unit": "iter/sec",
            "range": "stddev: 0.012422724646390479",
            "extra": "mean: 77.02022533333046 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "43c63ae4fafa977804bf159b2b1fcbc97c2ee515",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/43c63ae4fafa977804bf159b2b1fcbc97c2ee515"
        },
        "date": 1719263163134,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 306.82827847340843,
            "unit": "iter/sec",
            "range": "stddev: 0.001255429403030715",
            "extra": "mean: 3.2591520083331105 msec\nrounds: 240"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1749.7290683824092,
            "unit": "iter/sec",
            "range": "stddev: 0.000017102894696017",
            "extra": "mean: 571.5170525940229 usec\nrounds: 1407"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.696363825840589,
            "unit": "iter/sec",
            "range": "stddev: 0.010169534328949242",
            "extra": "mean: 270.53613960000007 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.430952107009018,
            "unit": "iter/sec",
            "range": "stddev: 0.013797757037511628",
            "extra": "mean: 80.44436109090664 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.00561568601898,
            "unit": "iter/sec",
            "range": "stddev: 0.0028864705171011396",
            "extra": "mean: 5.916963149069638 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.390961833358002,
            "unit": "iter/sec",
            "range": "stddev: 0.014815647768266726",
            "extra": "mean: 80.70398516666206 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "56e257b86ec01848c367a0ecf50176ca9a6d4a7e",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/56e257b86ec01848c367a0ecf50176ca9a6d4a7e"
        },
        "date": 1719872737736,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 304.032964968791,
            "unit": "iter/sec",
            "range": "stddev: 0.0018669921245238802",
            "extra": "mean: 3.2891170209212346 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1732.0271959153831,
            "unit": "iter/sec",
            "range": "stddev: 0.0008414797315383957",
            "extra": "mean: 577.3581398480849 usec\nrounds: 1187"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7769363480372147,
            "unit": "iter/sec",
            "range": "stddev: 0.015183979007375198",
            "extra": "mean: 264.76485380000554 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.333720964616784,
            "unit": "iter/sec",
            "range": "stddev: 0.015678149799191198",
            "extra": "mean: 81.07853281818352 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.79893035648598,
            "unit": "iter/sec",
            "range": "stddev: 0.0003267085716904636",
            "extra": "mean: 5.7537753422812195 msec\nrounds: 149"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.492010762248071,
            "unit": "iter/sec",
            "range": "stddev: 0.012043652927620913",
            "extra": "mean: 74.11793672727381 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "474529bf09b8166ee032e79ab1a8b6d1272e581b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/474529bf09b8166ee032e79ab1a8b6d1272e581b"
        },
        "date": 1720471532476,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 299.44691428592114,
            "unit": "iter/sec",
            "range": "stddev: 0.0014234576323486961",
            "extra": "mean: 3.3394900808534267 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1761.8975869917433,
            "unit": "iter/sec",
            "range": "stddev: 0.00001218796751184418",
            "extra": "mean: 567.5698788528315 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.903728630474028,
            "unit": "iter/sec",
            "range": "stddev: 0.012390625059818283",
            "extra": "mean: 256.1653472000103 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.306770284565628,
            "unit": "iter/sec",
            "range": "stddev: 0.010747995493746759",
            "extra": "mean: 75.14971541666189 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.64201422814327,
            "unit": "iter/sec",
            "range": "stddev: 0.001904073028738974",
            "extra": "mean: 5.826079380954009 msec\nrounds: 147"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.379900232640658,
            "unit": "iter/sec",
            "range": "stddev: 0.0121708693273135",
            "extra": "mean: 74.73897283333031 msec\nrounds: 12"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "6acbd69f4954950a8b25d83a6b1feeb2382f6d4f",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/6acbd69f4954950a8b25d83a6b1feeb2382f6d4f"
        },
        "date": 1721078246280,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 317.15095264750937,
            "unit": "iter/sec",
            "range": "stddev: 0.0014818188705012737",
            "extra": "mean: 3.153072666666174 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1703.8682313030101,
            "unit": "iter/sec",
            "range": "stddev: 0.0008470927395944192",
            "extra": "mean: 586.899844499867 usec\nrounds: 1209"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.017511726166706,
            "unit": "iter/sec",
            "range": "stddev: 0.01768325311734706",
            "extra": "mean: 248.9102877999926 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.287047317159686,
            "unit": "iter/sec",
            "range": "stddev: 0.017353108715805036",
            "extra": "mean: 75.26126581249848 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.24983637947193,
            "unit": "iter/sec",
            "range": "stddev: 0.00033698941396433904",
            "extra": "mean: 5.673764132449835 msec\nrounds: 151"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.855559815189903,
            "unit": "iter/sec",
            "range": "stddev: 0.015763875647408155",
            "extra": "mean: 72.17319352940876 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d3d40b8314d31612934e7319f20db80f9770be46",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d3d40b8314d31612934e7319f20db80f9770be46"
        },
        "date": 1721683187527,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 303.30219923885045,
            "unit": "iter/sec",
            "range": "stddev: 0.001164246858017544",
            "extra": "mean: 3.297041704641581 msec\nrounds: 237"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1685.0287441955652,
            "unit": "iter/sec",
            "range": "stddev: 0.000035964251321337",
            "extra": "mean: 593.4616863033996 usec\nrounds: 1358"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.16690348915411,
            "unit": "iter/sec",
            "range": "stddev: 0.008070105092852206",
            "extra": "mean: 239.98635979999676 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.212965500980316,
            "unit": "iter/sec",
            "range": "stddev: 0.010950191642778358",
            "extra": "mean: 70.35829362500223 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.03842866560265,
            "unit": "iter/sec",
            "range": "stddev: 0.002200708938798161",
            "extra": "mean: 5.812654810651267 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.002927775225507,
            "unit": "iter/sec",
            "range": "stddev: 0.010855083388934615",
            "extra": "mean: 71.41363692307525 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "05ddee10db73ccaf16d64df2fd1150dc153be14b",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/05ddee10db73ccaf16d64df2fd1150dc153be14b"
        },
        "date": 1722287804906,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 333.0828456695262,
            "unit": "iter/sec",
            "range": "stddev: 0.0014161895620541302",
            "extra": "mean: 3.00225608433815 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1914.7430008613217,
            "unit": "iter/sec",
            "range": "stddev: 0.000011249195674827973",
            "extra": "mean: 522.2633008973859 usec\nrounds: 1449"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.402803693768822,
            "unit": "iter/sec",
            "range": "stddev: 0.014664472037367678",
            "extra": "mean: 227.12800059999836 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.958950631818105,
            "unit": "iter/sec",
            "range": "stddev: 0.013064564875609945",
            "extra": "mean: 66.8496089473664 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.54902935898025,
            "unit": "iter/sec",
            "range": "stddev: 0.0024472720988305",
            "extra": "mean: 5.477980373335829 msec\nrounds: 150"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.300179923190138,
            "unit": "iter/sec",
            "range": "stddev: 0.013516780377286363",
            "extra": "mean: 65.35870852631756 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "ec292f04372eeec0effdcbf7286b63eb713ca6db",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/ec292f04372eeec0effdcbf7286b63eb713ca6db"
        },
        "date": 1722894805978,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.8696484955309,
            "unit": "iter/sec",
            "range": "stddev: 0.0015034954273718262",
            "extra": "mean: 3.510377484162509 msec\nrounds: 221"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1654.9394225035492,
            "unit": "iter/sec",
            "range": "stddev: 0.000026179136498837184",
            "extra": "mean: 604.2517245055569 usec\nrounds: 1314"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9938000344116324,
            "unit": "iter/sec",
            "range": "stddev: 0.010562429007823447",
            "extra": "mean: 250.38809940000417 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.631748281937213,
            "unit": "iter/sec",
            "range": "stddev: 0.011382874916506672",
            "extra": "mean: 79.16560540000243 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 165.89701991995094,
            "unit": "iter/sec",
            "range": "stddev: 0.002205481311158267",
            "extra": "mean: 6.027835825396518 msec\nrounds: 126"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.561328373355968,
            "unit": "iter/sec",
            "range": "stddev: 0.013409427084983523",
            "extra": "mean: 79.60941472727643 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "96b61f9c6188fc4fbf6af5a4a9084c16b184e414",
          "message": "chore(deps): update dependency sqlalchemy to v2",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/14/commits/96b61f9c6188fc4fbf6af5a4a9084c16b184e414"
        },
        "date": 1722938257207,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 343.4881215428297,
            "unit": "iter/sec",
            "range": "stddev: 0.0013861227010929936",
            "extra": "mean: 2.911308826367405 msec\nrounds: 311"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1964.7620466491887,
            "unit": "iter/sec",
            "range": "stddev: 0.000009870128160018881",
            "extra": "mean: 508.9674862691154 usec\nrounds: 1493"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8602111703660063,
            "unit": "iter/sec",
            "range": "stddev: 0.014365753472077922",
            "extra": "mean: 259.0531854000062 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.375878363708173,
            "unit": "iter/sec",
            "range": "stddev: 0.010129394029234188",
            "extra": "mean: 65.03693488889122 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 186.09104001683093,
            "unit": "iter/sec",
            "range": "stddev: 0.0020540428228007224",
            "extra": "mean: 5.373713854839843 msec\nrounds: 186"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.337531313360035,
            "unit": "iter/sec",
            "range": "stddev: 0.009809552001480995",
            "extra": "mean: 65.19954088888686 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "534ca3261f447b03eafc4d2a29da04f4aac0eec2",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/534ca3261f447b03eafc4d2a29da04f4aac0eec2"
        },
        "date": 1723497372561,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 274.81362868877005,
            "unit": "iter/sec",
            "range": "stddev: 0.0014495104689040323",
            "extra": "mean: 3.638829721696637 msec\nrounds: 212"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1545.9866028930333,
            "unit": "iter/sec",
            "range": "stddev: 0.0006892738171444961",
            "extra": "mean: 646.8361356616425 usec\nrounds: 1231"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9731584855413478,
            "unit": "iter/sec",
            "range": "stddev: 0.011145377167944484",
            "extra": "mean: 251.68892799999864 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.83668387141881,
            "unit": "iter/sec",
            "range": "stddev: 0.011957991062212946",
            "extra": "mean: 77.90173926667497 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.87108791844048,
            "unit": "iter/sec",
            "range": "stddev: 0.002170398929934288",
            "extra": "mean: 6.139825138889974 msec\nrounds: 144"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.097726440717947,
            "unit": "iter/sec",
            "range": "stddev: 0.014202975135118997",
            "extra": "mean: 82.66015973334031 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d4372625a0332bff91be3174e2b9fce1ea2378f6",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d4372625a0332bff91be3174e2b9fce1ea2378f6"
        },
        "date": 1724102516559,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 250.25846308033147,
            "unit": "iter/sec",
            "range": "stddev: 0.0017700304653780507",
            "extra": "mean: 3.995868861701616 msec\nrounds: 188"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1467.0034735354825,
            "unit": "iter/sec",
            "range": "stddev: 0.0007205030773790509",
            "extra": "mean: 681.661644324534 usec\nrounds: 925"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.5373077989392714,
            "unit": "iter/sec",
            "range": "stddev: 0.005897107175868865",
            "extra": "mean: 282.70087220000164 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.143587561720956,
            "unit": "iter/sec",
            "range": "stddev: 0.015298300190104492",
            "extra": "mean: 89.73770740000049 msec\nrounds: 10"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 150.90793116237836,
            "unit": "iter/sec",
            "range": "stddev: 0.002464373554990688",
            "extra": "mean: 6.626556949640974 msec\nrounds: 139"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.096501186401262,
            "unit": "iter/sec",
            "range": "stddev: 0.014087246363986953",
            "extra": "mean: 90.11849620000021 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "d9842b81fd3b2c38ae1a513d60dfc7b262875bbd",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/d9842b81fd3b2c38ae1a513d60dfc7b262875bbd"
        },
        "date": 1724707934242,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 310.40789175722165,
            "unit": "iter/sec",
            "range": "stddev: 0.0015119048543389896",
            "extra": "mean: 3.221567577869853 msec\nrounds: 244"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1760.9835118714243,
            "unit": "iter/sec",
            "range": "stddev: 0.000029468303421733448",
            "extra": "mean: 567.8644878039117 usec\nrounds: 41"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.854036138652432,
            "unit": "iter/sec",
            "range": "stddev: 0.014327737422517861",
            "extra": "mean: 259.46824680000304 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.167309706956956,
            "unit": "iter/sec",
            "range": "stddev: 0.014856052299321727",
            "extra": "mean: 82.18743699999891 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.43230009242683,
            "unit": "iter/sec",
            "range": "stddev: 0.0026818716905693926",
            "extra": "mean: 5.902062354430006 msec\nrounds: 158"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.015154584715116,
            "unit": "iter/sec",
            "range": "stddev: 0.012927742698014048",
            "extra": "mean: 83.22822589999248 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "3172f99e1d7181ac83faefad6dca3c943ff88d28",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/3172f99e1d7181ac83faefad6dca3c943ff88d28"
        },
        "date": 1725311901106,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 311.2773433128711,
            "unit": "iter/sec",
            "range": "stddev: 0.0023072529368169128",
            "extra": "mean: 3.2125691814160726 msec\nrounds: 226"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1804.1384911931095,
            "unit": "iter/sec",
            "range": "stddev: 0.0006252479413144844",
            "extra": "mean: 554.2811734694945 usec\nrounds: 1372"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.1364134112175215,
            "unit": "iter/sec",
            "range": "stddev: 0.012696523302018849",
            "extra": "mean: 241.7553326000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.431134127065231,
            "unit": "iter/sec",
            "range": "stddev: 0.01511626259607064",
            "extra": "mean: 69.29462308333238 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 187.7562169084181,
            "unit": "iter/sec",
            "range": "stddev: 0.0002204395447441772",
            "extra": "mean: 5.326055331034765 msec\nrounds: 145"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.654442768526419,
            "unit": "iter/sec",
            "range": "stddev: 0.012742996596289155",
            "extra": "mean: 68.23869155555447 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "dbcf9d7901aa28036aff66811bf39ccaf1042af0",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/dbcf9d7901aa28036aff66811bf39ccaf1042af0"
        },
        "date": 1725917120920,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 291.955547130031,
            "unit": "iter/sec",
            "range": "stddev: 0.0014864467764496606",
            "extra": "mean: 3.425178969299119 msec\nrounds: 228"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1630.4885705886256,
            "unit": "iter/sec",
            "range": "stddev: 0.0006897833552162361",
            "extra": "mean: 613.3131001580638 usec\nrounds: 1268"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7149787771174565,
            "unit": "iter/sec",
            "range": "stddev: 0.016000859003387265",
            "extra": "mean: 269.1805418000058 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.063649816734483,
            "unit": "iter/sec",
            "range": "stddev: 0.013851999981681944",
            "extra": "mean: 76.54828581817955 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.26025898291533,
            "unit": "iter/sec",
            "range": "stddev: 0.0028656312148436676",
            "extra": "mean: 6.087899813332266 msec\nrounds: 150"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.388697157282142,
            "unit": "iter/sec",
            "range": "stddev: 0.01601181889286263",
            "extra": "mean: 80.71873799999985 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "caa3351fb7bd399e537e3a223e91ce44c7593a99",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/caa3351fb7bd399e537e3a223e91ce44c7593a99"
        },
        "date": 1726521826566,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.7790221784376,
            "unit": "iter/sec",
            "range": "stddev: 0.001284664976085721",
            "extra": "mean: 3.238561975308409 msec\nrounds: 243"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1781.6098688523348,
            "unit": "iter/sec",
            "range": "stddev: 0.000010009933515669603",
            "extra": "mean: 561.2901104124288 usec\nrounds: 1431"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.148769638511218,
            "unit": "iter/sec",
            "range": "stddev: 0.007310283640385797",
            "extra": "mean: 241.03531579999924 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.954900705404253,
            "unit": "iter/sec",
            "range": "stddev: 0.010498233460058588",
            "extra": "mean: 71.65941349999964 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.90149534936697,
            "unit": "iter/sec",
            "range": "stddev: 0.001616959942048631",
            "extra": "mean: 5.750381835366087 msec\nrounds: 164"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.887109405678272,
            "unit": "iter/sec",
            "range": "stddev: 0.018409865200289567",
            "extra": "mean: 77.59692018750019 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "9e585fcb7e50ef3fe3b7e2bb007524c173d51baa",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/9e585fcb7e50ef3fe3b7e2bb007524c173d51baa"
        },
        "date": 1727126822388,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.6909078674665,
            "unit": "iter/sec",
            "range": "stddev: 0.0018166968450238038",
            "extra": "mean: 3.3591889223744955 msec\nrounds: 219"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1818.26469906306,
            "unit": "iter/sec",
            "range": "stddev: 0.000013117133582098328",
            "extra": "mean: 549.974929676242 usec\nrounds: 1294"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.197817657026847,
            "unit": "iter/sec",
            "range": "stddev: 0.009449915031748895",
            "extra": "mean: 238.21901800000091 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.921954839659671,
            "unit": "iter/sec",
            "range": "stddev: 0.014878954787670859",
            "extra": "mean: 71.82899323529521 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 166.66382988753662,
            "unit": "iter/sec",
            "range": "stddev: 0.0027506696486435597",
            "extra": "mean: 6.000102125786931 msec\nrounds: 159"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.623009992041824,
            "unit": "iter/sec",
            "range": "stddev: 0.012416757355043943",
            "extra": "mean: 68.38537349999916 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "19ee000da75376c706a34aa864081bf5522115d9",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/19ee000da75376c706a34aa864081bf5522115d9"
        },
        "date": 1727732476350,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 294.0313987182294,
            "unit": "iter/sec",
            "range": "stddev: 0.0011750046361246114",
            "extra": "mean: 3.400997323276692 msec\nrounds: 232"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1643.9650900993213,
            "unit": "iter/sec",
            "range": "stddev: 0.00007244032082017749",
            "extra": "mean: 608.2854228611292 usec\nrounds: 1426"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.835222085480404,
            "unit": "iter/sec",
            "range": "stddev: 0.0021117473710518344",
            "extra": "mean: 260.7410934000029 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.547093833301776,
            "unit": "iter/sec",
            "range": "stddev: 0.010473558808328152",
            "extra": "mean: 79.69973073333183 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.26518076639812,
            "unit": "iter/sec",
            "range": "stddev: 0.0016689413346227357",
            "extra": "mean: 5.9078895935490365 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.09493799663505,
            "unit": "iter/sec",
            "range": "stddev: 0.011866602792630023",
            "extra": "mean: 82.67921673333187 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "7bc5addf1d9acee615c30d26c8b1111ea58704db",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/7bc5addf1d9acee615c30d26c8b1111ea58704db"
        },
        "date": 1728341856411,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 297.97863749665754,
            "unit": "iter/sec",
            "range": "stddev: 0.0015998047841267236",
            "extra": "mean: 3.3559452731279005 msec\nrounds: 227"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1544.841235622042,
            "unit": "iter/sec",
            "range": "stddev: 0.0006010943623281169",
            "extra": "mean: 647.3157091753461 usec\nrounds: 1286"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.008256633492154,
            "unit": "iter/sec",
            "range": "stddev: 0.013896928685197863",
            "extra": "mean: 249.48502340000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.111899495192963,
            "unit": "iter/sec",
            "range": "stddev: 0.013812519346111413",
            "extra": "mean: 76.26660045454256 msec\nrounds: 11"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 167.75924490200111,
            "unit": "iter/sec",
            "range": "stddev: 0.0022014770843382814",
            "extra": "mean: 5.960923349316241 msec\nrounds: 146"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.44176728797982,
            "unit": "iter/sec",
            "range": "stddev: 0.013329360669390456",
            "extra": "mean: 74.39497936363182 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "4734a44778a2c9fb6aff1f6b33e577e724934be5",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/4734a44778a2c9fb6aff1f6b33e577e724934be5"
        },
        "date": 1728942483139,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 287.7998548743576,
            "unit": "iter/sec",
            "range": "stddev: 0.00007409383690452096",
            "extra": "mean: 3.4746369154236088 msec\nrounds: 201"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1631.1823310133466,
            "unit": "iter/sec",
            "range": "stddev: 0.00005140247707218873",
            "extra": "mean: 613.0522511108649 usec\nrounds: 1350"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.4580862189531127,
            "unit": "iter/sec",
            "range": "stddev: 0.01110185940821668",
            "extra": "mean: 289.1772896000077 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.233258578963733,
            "unit": "iter/sec",
            "range": "stddev: 0.010854039529318692",
            "extra": "mean: 89.0213639230808 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 164.0966844931043,
            "unit": "iter/sec",
            "range": "stddev: 0.0019268485227056222",
            "extra": "mean: 6.093968340000326 msec\nrounds: 150"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.572128871537497,
            "unit": "iter/sec",
            "range": "stddev: 0.010457907629337673",
            "extra": "mean: 86.4145232999931 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "f1c28059c4e152160361d866959a0140de3b07e5",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/f1c28059c4e152160361d866959a0140de3b07e5"
        },
        "date": 1729547053916,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 296.2605785068072,
            "unit": "iter/sec",
            "range": "stddev: 0.001296018858663352",
            "extra": "mean: 3.3754068969963313 msec\nrounds: 233"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1740.2626987005635,
            "unit": "iter/sec",
            "range": "stddev: 0.00001645001112563457",
            "extra": "mean: 574.6258888078736 usec\nrounds: 1367"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.4292637786884335,
            "unit": "iter/sec",
            "range": "stddev: 0.008884765330816355",
            "extra": "mean: 225.77115519999893 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.347872336427278,
            "unit": "iter/sec",
            "range": "stddev: 0.011277758232949303",
            "extra": "mean: 74.91830718750059 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.778604565338,
            "unit": "iter/sec",
            "range": "stddev: 0.0015717997727909146",
            "extra": "mean: 5.7877536545437245 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.777014176052603,
            "unit": "iter/sec",
            "range": "stddev: 0.009223309250890864",
            "extra": "mean: 72.58466799999479 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "40155ed70d135a33f7acaa3e60a169c765264a44",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/40155ed70d135a33f7acaa3e60a169c765264a44"
        },
        "date": 1730153227702,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 293.22843280310167,
            "unit": "iter/sec",
            "range": "stddev: 0.0016770082007731587",
            "extra": "mean: 3.4103104887904387 msec\nrounds: 223"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1520.7625122972765,
            "unit": "iter/sec",
            "range": "stddev: 0.000038697933865198454",
            "extra": "mean: 657.5648675672519 usec\nrounds: 1110"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.625743375196343,
            "unit": "iter/sec",
            "range": "stddev: 0.01626081050337067",
            "extra": "mean: 275.8055098 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 11.25075815905851,
            "unit": "iter/sec",
            "range": "stddev: 0.01646120209775717",
            "extra": "mean: 88.88289890000465 msec\nrounds: 10"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 152.98777092902827,
            "unit": "iter/sec",
            "range": "stddev: 0.0027997300102856324",
            "extra": "mean: 6.536470163121107 msec\nrounds: 141"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 11.557524875607237,
            "unit": "iter/sec",
            "range": "stddev: 0.014964815510321002",
            "extra": "mean: 86.52371600000208 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "699f8f9488f8bbed0505f59288c30fb69138b7b1",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/699f8f9488f8bbed0505f59288c30fb69138b7b1"
        },
        "date": 1730757617310,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 307.40471951658276,
            "unit": "iter/sec",
            "range": "stddev: 0.0015463400295354082",
            "extra": "mean: 3.2530404919370652 msec\nrounds: 248"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1791.9887257284481,
            "unit": "iter/sec",
            "range": "stddev: 0.000030434365642637516",
            "extra": "mean: 558.0392251594649 usec\nrounds: 1097"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8543323034656827,
            "unit": "iter/sec",
            "range": "stddev: 0.015135393406690078",
            "extra": "mean: 259.4483094000054 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.282085316213548,
            "unit": "iter/sec",
            "range": "stddev: 0.01339073976805243",
            "extra": "mean: 81.41939860000018 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.77132601951394,
            "unit": "iter/sec",
            "range": "stddev: 0.0026793567046680816",
            "extra": "mean: 5.890276193549067 msec\nrounds: 155"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.300725197126225,
            "unit": "iter/sec",
            "range": "stddev: 0.013287288458734649",
            "extra": "mean: 81.29601986666822 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "252551c61c1b2639838a4f41badd4ab8df078fec",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/252551c61c1b2639838a4f41badd4ab8df078fec"
        },
        "date": 1731361442798,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 319.7757101972777,
            "unit": "iter/sec",
            "range": "stddev: 0.0013674870218915594",
            "extra": "mean: 3.1271918663962155 msec\nrounds: 247"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1820.5025842038672,
            "unit": "iter/sec",
            "range": "stddev: 0.000015240458712364683",
            "extra": "mean: 549.2988632242535 usec\nrounds: 1433"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.341580591140898,
            "unit": "iter/sec",
            "range": "stddev: 0.012488854974011889",
            "extra": "mean: 230.33086200001094 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.198753257756382,
            "unit": "iter/sec",
            "range": "stddev: 0.01056057931359523",
            "extra": "mean: 70.4287187647076 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.97276154864116,
            "unit": "iter/sec",
            "range": "stddev: 0.002578905880030375",
            "extra": "mean: 5.650587080459548 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.187882445742156,
            "unit": "iter/sec",
            "range": "stddev: 0.010644583567013675",
            "extra": "mean: 70.48268152941345 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "ac85968c4987b790f1455682b6a2fa46d739e343",
          "message": "chore(deps): update codecov/codecov-action action to v5",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/15/commits/ac85968c4987b790f1455682b6a2fa46d739e343"
        },
        "date": 1731612285126,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 321.68386323022656,
            "unit": "iter/sec",
            "range": "stddev: 0.0012016425444555125",
            "extra": "mean: 3.1086420996017075 msec\nrounds: 251"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1828.0678395536495,
            "unit": "iter/sec",
            "range": "stddev: 0.000018916452246362348",
            "extra": "mean: 547.0256509978127 usec\nrounds: 1404"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.289998743004569,
            "unit": "iter/sec",
            "range": "stddev: 0.009990611978560158",
            "extra": "mean: 233.10030140000322 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.766049561726865,
            "unit": "iter/sec",
            "range": "stddev: 0.010632814699062956",
            "extra": "mean: 67.72292046154095 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 173.44681064392805,
            "unit": "iter/sec",
            "range": "stddev: 0.0024739186440178116",
            "extra": "mean: 5.765456258823446 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.475776990308843,
            "unit": "iter/sec",
            "range": "stddev: 0.01172477777628419",
            "extra": "mean: 69.0809205384605 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "88b411a5c34411a061e669e2c97f23a8672e7234",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/88b411a5c34411a061e669e2c97f23a8672e7234"
        },
        "date": 1731966331381,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 308.59318304028614,
            "unit": "iter/sec",
            "range": "stddev: 0.0013641023060182243",
            "extra": "mean: 3.240512282701502 msec\nrounds: 237"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1762.5986916289892,
            "unit": "iter/sec",
            "range": "stddev: 0.000013170806121421378",
            "extra": "mean: 567.344117948824 usec\nrounds: 1365"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.778603175855567,
            "unit": "iter/sec",
            "range": "stddev: 0.0032057492061636334",
            "extra": "mean: 264.6480599999961 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 12.635640111263148,
            "unit": "iter/sec",
            "range": "stddev: 0.011528243888183312",
            "extra": "mean: 79.14122206667003 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.06572449398064,
            "unit": "iter/sec",
            "range": "stddev: 0.0018661955446020965",
            "extra": "mean: 5.744956411763771 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.102399315550212,
            "unit": "iter/sec",
            "range": "stddev: 0.014898236658827951",
            "extra": "mean: 82.62824370000033 msec\nrounds: 10"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "committer": {
            "name": "jvllmr",
            "username": "jvllmr"
          },
          "id": "862387304492f67335068ea02f7fdf3855eb2415",
          "message": "[pre-commit.ci] pre-commit autoupdate",
          "timestamp": "2024-06-11T11:02:03Z",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/pull/5/commits/862387304492f67335068ea02f7fdf3855eb2415"
        },
        "date": 1732571073491,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 273.6790259219261,
            "unit": "iter/sec",
            "range": "stddev: 0.0008400346754446323",
            "extra": "mean: 3.653915372693834 msec\nrounds: 271"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1719.7541883407473,
            "unit": "iter/sec",
            "range": "stddev: 0.000012112352596689558",
            "extra": "mean: 581.4784501061862 usec\nrounds: 1413"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.670624182439722,
            "unit": "iter/sec",
            "range": "stddev: 0.005892010574991442",
            "extra": "mean: 214.1041456000096 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.901921524448282,
            "unit": "iter/sec",
            "range": "stddev: 0.007887685239476085",
            "extra": "mean: 71.93250215384786 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 163.59622774519121,
            "unit": "iter/sec",
            "range": "stddev: 0.002209936378703588",
            "extra": "mean: 6.112610380952956 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.920547068419575,
            "unit": "iter/sec",
            "range": "stddev: 0.007254455395588407",
            "extra": "mean: 71.83625723076787 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "035ace50690e2b7311ffaa702c635e3530e14db8",
          "message": "refactor: drop sqlalchemy v1 support and modernize repository (#16)\n\n* refactor: drop sqlalchemy v1 support and modernize repository\r\n\r\n* [pre-commit.ci] auto fixes from pre-commit.com hooks\r\n\r\nfor more information, see https://pre-commit.ci\r\n\r\n* prettier 3.1.0 in pre-commit\r\n\r\n* only upload benchmark when not in pull request\r\n\r\n* revert breaking change\r\n\r\n* remove var name collision in tests\r\n\r\n* full update\r\n\r\n* bind mapper exceptions cannot be covered\r\n\r\n---------\r\n\r\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2024-11-27T23:10:51+01:00",
          "tree_id": "ff66fd2c5c2a90f5fdbaa1d8a15ae98d6e2ba08a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/035ace50690e2b7311ffaa702c635e3530e14db8"
        },
        "date": 1732745507886,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 320.22885675290803,
            "unit": "iter/sec",
            "range": "stddev: 0.0015275922147991484",
            "extra": "mean: 3.1227666680008497 msec\nrounds: 250"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1941.6408894732888,
            "unit": "iter/sec",
            "range": "stddev: 0.000014002901032888672",
            "extra": "mean: 515.028296644119 usec\nrounds: 1490"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.016470478658342,
            "unit": "iter/sec",
            "range": "stddev: 0.01458302495667048",
            "extra": "mean: 248.97481640000478 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.726505444050265,
            "unit": "iter/sec",
            "range": "stddev: 0.012390819104920674",
            "extra": "mean: 63.58691723076504 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.13709702322848,
            "unit": "iter/sec",
            "range": "stddev: 0.002155987577653912",
            "extra": "mean: 5.645344858896876 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.448599154201537,
            "unit": "iter/sec",
            "range": "stddev: 0.012896326541183138",
            "extra": "mean: 64.73078821053048 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "5787ef338bd6b2bd1ee550bf92b2609184f5c638",
          "message": "fix: fix incorrect trove classifier",
          "timestamp": "2024-11-27T23:19:55+01:00",
          "tree_id": "8076ab2b1194418a8e27dfaa1cee8227ef2d0d3e",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5787ef338bd6b2bd1ee550bf92b2609184f5c638"
        },
        "date": 1732746043821,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 347.4296069921896,
            "unit": "iter/sec",
            "range": "stddev: 0.0013510606129596542",
            "extra": "mean: 2.8782808945309046 msec\nrounds: 256"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2049.475664996977,
            "unit": "iter/sec",
            "range": "stddev: 0.000010411123702773679",
            "extra": "mean: 487.92967737017517 usec\nrounds: 1308"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.7866963524428074,
            "unit": "iter/sec",
            "range": "stddev: 0.011528529391303617",
            "extra": "mean: 208.91235339999525 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.539805272084987,
            "unit": "iter/sec",
            "range": "stddev: 0.012056895154711525",
            "extra": "mean: 60.46020394736735 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 189.5900795803551,
            "unit": "iter/sec",
            "range": "stddev: 0.0020347425198364174",
            "extra": "mean: 5.274537582416932 msec\nrounds: 182"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.41942973514444,
            "unit": "iter/sec",
            "range": "stddev: 0.012679726041301013",
            "extra": "mean: 60.90345499999809 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "12dfaa057c817bce2819845973583abae621d1db",
          "message": "chore: update trove classifiers (#17)",
          "timestamp": "2024-11-27T23:28:03+01:00",
          "tree_id": "fd2f0554622ceddaa5571986434648d264dd918b",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/12dfaa057c817bce2819845973583abae621d1db"
        },
        "date": 1732746523647,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 332.1681819532507,
            "unit": "iter/sec",
            "range": "stddev: 0.0014315567067229413",
            "extra": "mean: 3.010523145593577 msec\nrounds: 261"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1983.788820883938,
            "unit": "iter/sec",
            "range": "stddev: 0.00001390019230301607",
            "extra": "mean: 504.08591351695355 usec\nrounds: 1561"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.264522416578145,
            "unit": "iter/sec",
            "range": "stddev: 0.011611938457911662",
            "extra": "mean: 234.49284639999632 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.813465360612948,
            "unit": "iter/sec",
            "range": "stddev: 0.009641502400076713",
            "extra": "mean: 63.237246055550145 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 178.83910935394096,
            "unit": "iter/sec",
            "range": "stddev: 0.0024886297264716936",
            "extra": "mean: 5.591618095239433 msec\nrounds: 189"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.13163939696078,
            "unit": "iter/sec",
            "range": "stddev: 0.009269632185532044",
            "extra": "mean: 61.98997977777765 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5f1bd949a327a392ab653ef5d9dbd5a4986278d7",
          "message": "chore(deps): lock file maintenance (#18)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-01T03:08:55Z",
          "tree_id": "2f6a126c15a5bfd7ce632a4a57ce486d6ba26d07",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5f1bd949a327a392ab653ef5d9dbd5a4986278d7"
        },
        "date": 1733022583943,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 380.2499720231536,
            "unit": "iter/sec",
            "range": "stddev: 0.000024257749675075962",
            "extra": "mean: 2.6298489771857487 msec\nrounds: 263"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2146.732435882124,
            "unit": "iter/sec",
            "range": "stddev: 0.000009479102893576812",
            "extra": "mean: 465.82423747144134 usec\nrounds: 1756"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.6157918745127775,
            "unit": "iter/sec",
            "range": "stddev: 0.007771705454244924",
            "extra": "mean: 216.64754980001248 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.966842065816225,
            "unit": "iter/sec",
            "range": "stddev: 0.0116389940624229",
            "extra": "mean: 62.629792157894684 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 199.0290626454386,
            "unit": "iter/sec",
            "range": "stddev: 0.0017855858108496365",
            "extra": "mean: 5.024391848649036 msec\nrounds: 185"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.806404436287474,
            "unit": "iter/sec",
            "range": "stddev: 0.012349930443896472",
            "extra": "mean: 63.26549494736798 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5df2ee3b7c3015c367863b07392b7c56ee52d641",
          "message": "fix(deps): update all non-major dependencies (#19)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-19T20:07:03Z",
          "tree_id": "827a12fbeb030842384cd7a7a62ab0c5ede13ea7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5df2ee3b7c3015c367863b07392b7c56ee52d641"
        },
        "date": 1734638871878,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 316.48941879639057,
            "unit": "iter/sec",
            "range": "stddev: 0.0015752075310677361",
            "extra": "mean: 3.159663295547132 msec\nrounds: 247"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1867.3410695029677,
            "unit": "iter/sec",
            "range": "stddev: 0.000057092640541252555",
            "extra": "mean: 535.5208088826382 usec\nrounds: 1486"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.5657907607846364,
            "unit": "iter/sec",
            "range": "stddev: 0.013957329700470863",
            "extra": "mean: 280.44270319999214 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.303534097263988,
            "unit": "iter/sec",
            "range": "stddev: 0.012161047497085568",
            "extra": "mean: 69.91279170588213 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.22817850693028,
            "unit": "iter/sec",
            "range": "stddev: 0.00196057750631828",
            "extra": "mean: 5.548521925285658 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.208240795467535,
            "unit": "iter/sec",
            "range": "stddev: 0.013663513116937427",
            "extra": "mean: 70.3816900625025 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "974eaed50e5a6d27d8a1e40efa029a5a113f4c23",
          "message": "chore(deps): update all non-major dependencies (#20)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2024-12-23T03:38:10Z",
          "tree_id": "5daadf492a7b29733581fd62d3a34f201a988462",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/974eaed50e5a6d27d8a1e40efa029a5a113f4c23"
        },
        "date": 1734925142555,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 340.7762576059639,
            "unit": "iter/sec",
            "range": "stddev: 0.0012779491787206448",
            "extra": "mean: 2.9344767356307133 msec\nrounds: 261"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1925.2801132095344,
            "unit": "iter/sec",
            "range": "stddev: 0.0005250871307009985",
            "extra": "mean: 519.4049391249109 usec\nrounds: 1577"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.874799586743819,
            "unit": "iter/sec",
            "range": "stddev: 0.010589262720065043",
            "extra": "mean: 258.07786380000834 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.290042024896879,
            "unit": "iter/sec",
            "range": "stddev: 0.009366677054283713",
            "extra": "mean: 65.40204391666767 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.18083114732005,
            "unit": "iter/sec",
            "range": "stddev: 0.002559142759034885",
            "extra": "mean: 5.58095413218512 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.663084171591576,
            "unit": "iter/sec",
            "range": "stddev: 0.010974908023848847",
            "extra": "mean: 68.19847641176413 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82e8caef4639c7c468127f7bbe76980f6cec1f20",
          "message": "chore(deps): lock file maintenance (#21)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-01T03:14:06Z",
          "tree_id": "cedfef791fdb0840b863a905a80f2bc1bd5d3fc3",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/82e8caef4639c7c468127f7bbe76980f6cec1f20"
        },
        "date": 1735701294458,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 323.87306685728925,
            "unit": "iter/sec",
            "range": "stddev: 0.0013302607713090683",
            "extra": "mean: 3.0876293904384395 msec\nrounds: 251"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1924.579140250248,
            "unit": "iter/sec",
            "range": "stddev: 0.000010755732272433904",
            "extra": "mean: 519.5941175326117 usec\nrounds: 1540"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.971371882863556,
            "unit": "iter/sec",
            "range": "stddev: 0.011970183243988635",
            "extra": "mean: 251.80215540000006 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.978472776659313,
            "unit": "iter/sec",
            "range": "stddev: 0.01231291446561271",
            "extra": "mean: 66.76248072221904 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.1224827081935,
            "unit": "iter/sec",
            "range": "stddev: 0.0017194970632640892",
            "extra": "mean: 5.582772105884046 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.16852509469736,
            "unit": "iter/sec",
            "range": "stddev: 0.011054400375731164",
            "extra": "mean: 65.92598777778215 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "90bfd9aad455c4e34404e77f6b3b846360c08975",
          "message": "chore(deps): update all non-major dependencies (#22)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-06T22:32:37Z",
          "tree_id": "7494684e9176d4f02099bef5c4e71e945788b227",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/90bfd9aad455c4e34404e77f6b3b846360c08975"
        },
        "date": 1736202803961,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.3830011605961,
            "unit": "iter/sec",
            "range": "stddev: 0.0016961568505730294",
            "extra": "mean: 2.9639904694664647 msec\nrounds: 262"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2027.1574811159223,
            "unit": "iter/sec",
            "range": "stddev: 0.000027873483435089776",
            "extra": "mean: 493.30158575026627 usec\nrounds: 1586"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.747818374311228,
            "unit": "iter/sec",
            "range": "stddev: 0.014970269035793848",
            "extra": "mean: 266.821894800006 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.217819823182753,
            "unit": "iter/sec",
            "range": "stddev: 0.013942663151827725",
            "extra": "mean: 70.33427152941255 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 185.38389074441466,
            "unit": "iter/sec",
            "range": "stddev: 0.0021334560007426847",
            "extra": "mean: 5.3942119565215165 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.980452572332196,
            "unit": "iter/sec",
            "range": "stddev: 0.013499081924962457",
            "extra": "mean: 71.52844264705958 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "94010c18a0c289d3a4b4b883495085ac8471b682",
          "message": "fix(deps): update all non-major dependencies (#23)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-19T09:36:26Z",
          "tree_id": "000cc54356ff2580002e5e354efedd09c7819af1",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/94010c18a0c289d3a4b4b883495085ac8471b682"
        },
        "date": 1737279438393,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.4514015779877,
            "unit": "iter/sec",
            "range": "stddev: 0.0014411565126548481",
            "extra": "mean: 3.0353490536396457 msec\nrounds: 261"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1931.9711390176572,
            "unit": "iter/sec",
            "range": "stddev: 0.00001108237041593491",
            "extra": "mean: 517.6060758901743 usec\nrounds: 1489"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.318533414720432,
            "unit": "iter/sec",
            "range": "stddev: 0.013867585105205934",
            "extra": "mean: 231.5600932000052 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.773718221554525,
            "unit": "iter/sec",
            "range": "stddev: 0.010249728551264443",
            "extra": "mean: 63.39659336842448 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.01889775978253,
            "unit": "iter/sec",
            "range": "stddev: 0.002075769698435533",
            "extra": "mean: 5.586002441719059 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.04906783509919,
            "unit": "iter/sec",
            "range": "stddev: 0.010763559632467338",
            "extra": "mean: 62.308914777779655 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "10dcdc1c40f211dd07a5c6479547df01056baa5a",
          "message": "chore(deps): update all non-major dependencies (#24)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T05:01:48Z",
          "tree_id": "5cbeab775061b1b318a0d9c9f4201a173983e011",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/10dcdc1c40f211dd07a5c6479547df01056baa5a"
        },
        "date": 1737954157601,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 302.1601512435588,
            "unit": "iter/sec",
            "range": "stddev: 0.001496751185947319",
            "extra": "mean: 3.3095032415241987 msec\nrounds: 236"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1844.6419693753062,
            "unit": "iter/sec",
            "range": "stddev: 0.00001687536528396879",
            "extra": "mean: 542.1106190805434 usec\nrounds: 1436"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8883402561757667,
            "unit": "iter/sec",
            "range": "stddev: 0.016380809918963016",
            "extra": "mean: 257.1791392000023 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.163647103082303,
            "unit": "iter/sec",
            "range": "stddev: 0.013785233365077282",
            "extra": "mean: 65.9471955000015 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.61400086917936,
            "unit": "iter/sec",
            "range": "stddev: 0.0020225349707271925",
            "extra": "mean: 5.861183694805702 msec\nrounds: 154"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.041346493050082,
            "unit": "iter/sec",
            "range": "stddev: 0.014183890092068503",
            "extra": "mean: 66.48340961110459 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "bf90edd62a0f32c9f10816e3a236775194c982eb",
          "message": "chore(deps): update dependency faker to v35 (#25)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-01-27T10:32:50+01:00",
          "tree_id": "c656a261a418e7eb92ae241de4fe2e6afd106ae7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/bf90edd62a0f32c9f10816e3a236775194c982eb"
        },
        "date": 1737970420829,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 302.19699158748193,
            "unit": "iter/sec",
            "range": "stddev: 0.0018774622963051441",
            "extra": "mean: 3.309099785364718 msec\nrounds: 205"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1844.8705281523596,
            "unit": "iter/sec",
            "range": "stddev: 0.00001714691300313535",
            "extra": "mean: 542.0434576520128 usec\nrounds: 1346"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.3663172186121773,
            "unit": "iter/sec",
            "range": "stddev: 0.017119990096395494",
            "extra": "mean: 297.06053679999513 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.389597089784255,
            "unit": "iter/sec",
            "range": "stddev: 0.016539916912447772",
            "extra": "mean: 74.68484625000116 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 154.5096187705808,
            "unit": "iter/sec",
            "range": "stddev: 0.0031586183932328263",
            "extra": "mean: 6.472088973857488 msec\nrounds: 153"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.657199599071214,
            "unit": "iter/sec",
            "range": "stddev: 0.018705407855356248",
            "extra": "mean: 79.0064178235271 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "763cf6e31d57ef9904f400f5a1444a94d5316d89",
          "message": "[pre-commit.ci] pre-commit autoupdate (#5)\n\n* [pre-commit.ci] pre-commit autoupdate\n\nupdates:\n- [github.com/asottile/pyupgrade: v3.19.0 → v3.19.1](https://github.com/asottile/pyupgrade/compare/v3.19.0...v3.19.1)\n- [github.com/hadialqattan/pycln: v2.4.0 → v2.5.0](https://github.com/hadialqattan/pycln/compare/v2.4.0...v2.5.0)\n- [github.com/astral-sh/ruff-pre-commit: v0.8.0 → v0.9.9](https://github.com/astral-sh/ruff-pre-commit/compare/v0.8.0...v0.9.9)\n- [github.com/pre-commit/mirrors-prettier: v3.1.0 → v4.0.0-alpha.8](https://github.com/pre-commit/mirrors-prettier/compare/v3.1.0...v4.0.0-alpha.8)\n- [github.com/pre-commit/mirrors-mypy: v1.13.0 → v1.15.0](https://github.com/pre-commit/mirrors-mypy/compare/v1.13.0...v1.15.0)\n\n* Update .pre-commit-config.yaml\n\n---------\n\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>\nCo-authored-by: Jan Vollmer <jan@vllmr.dev>",
          "timestamp": "2025-03-07T22:43:27+01:00",
          "tree_id": "76e355db732091a4d8c1b447bf27df7d54dff1d1",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/763cf6e31d57ef9904f400f5a1444a94d5316d89"
        },
        "date": 1741383850406,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.5088755959716,
            "unit": "iter/sec",
            "range": "stddev: 0.0012816507044094427",
            "extra": "mean: 3.034819618109933 msec\nrounds: 254"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1933.174184270571,
            "unit": "iter/sec",
            "range": "stddev: 0.000012839155305632402",
            "extra": "mean: 517.2839613401532 usec\nrounds: 1552"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.2698285824456335,
            "unit": "iter/sec",
            "range": "stddev: 0.012294015520410146",
            "extra": "mean: 234.2014393999932 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.473399785521096,
            "unit": "iter/sec",
            "range": "stddev: 0.011411930925616324",
            "extra": "mean: 64.62703826315719 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 178.1117633114782,
            "unit": "iter/sec",
            "range": "stddev: 0.002578357635785066",
            "extra": "mean: 5.614452304597202 msec\nrounds: 174"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.54207593127838,
            "unit": "iter/sec",
            "range": "stddev: 0.01210519798727657",
            "extra": "mean: 64.34146921052567 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fcc36d0a81f74251c7990b6944b81aead265c16f",
          "message": "fix(deps): update all non-major dependencies (#26)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-08T03:10:31Z",
          "tree_id": "64e3390c3f73da31becae3e89262c089e9596851",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/fcc36d0a81f74251c7990b6944b81aead265c16f"
        },
        "date": 1741403481358,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 334.89481784590754,
            "unit": "iter/sec",
            "range": "stddev: 0.0014103377339495335",
            "extra": "mean: 2.986012164751149 msec\nrounds: 261"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1932.5024071005791,
            "unit": "iter/sec",
            "range": "stddev: 0.0006426389759349312",
            "extra": "mean: 517.4637797736797 usec\nrounds: 1503"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.067004944357952,
            "unit": "iter/sec",
            "range": "stddev: 0.015669646944270785",
            "extra": "mean: 245.88118620000046 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.083393164684772,
            "unit": "iter/sec",
            "range": "stddev: 0.010939894710127625",
            "extra": "mean: 66.29807955555596 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 183.11237693337898,
            "unit": "iter/sec",
            "range": "stddev: 0.0018103064111423658",
            "extra": "mean: 5.461127296511616 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.237952617307975,
            "unit": "iter/sec",
            "range": "stddev: 0.010526130517610945",
            "extra": "mean: 65.6256142222252 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "8648a58891524cd24538a47e152a1f294abaf76a",
          "message": "chore(deps): lock file maintenance (#31)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-08T05:48:53Z",
          "tree_id": "b4fc4586d78ae7af7f1c6e370fd9d45c14714537",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/8648a58891524cd24538a47e152a1f294abaf76a"
        },
        "date": 1741412985035,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 321.0315188365647,
            "unit": "iter/sec",
            "range": "stddev: 0.001838338292148342",
            "extra": "mean: 3.1149589411782777 msec\nrounds: 221"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1938.8983721001227,
            "unit": "iter/sec",
            "range": "stddev: 0.000015021898366729298",
            "extra": "mean: 515.7567897263473 usec\nrounds: 1460"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.730906901119093,
            "unit": "iter/sec",
            "range": "stddev: 0.017714115177633657",
            "extra": "mean: 268.0313463999994 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.272204162883144,
            "unit": "iter/sec",
            "range": "stddev: 0.016240143517308913",
            "extra": "mean: 70.06626226666792 msec\nrounds: 15"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.83690138613136,
            "unit": "iter/sec",
            "range": "stddev: 0.0021632544870829108",
            "extra": "mean: 5.654928310559202 msec\nrounds: 161"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.007720008691875,
            "unit": "iter/sec",
            "range": "stddev: 0.01348857414914137",
            "extra": "mean: 66.6323731666662 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "52c9a3326695a6e60060581c88dc4e79a30304e0",
          "message": "chore(deps): update all non-major dependencies (#32)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-10T05:23:31Z",
          "tree_id": "c5ec40a37acada00efc98acca3c3d77b2017d542",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/52c9a3326695a6e60060581c88dc4e79a30304e0"
        },
        "date": 1741584253891,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 320.0122491545984,
            "unit": "iter/sec",
            "range": "stddev: 0.0014977456274715786",
            "extra": "mean: 3.1248803839283616 msec\nrounds: 224"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1912.5019874905988,
            "unit": "iter/sec",
            "range": "stddev: 0.00002417413994878494",
            "extra": "mean: 522.875273615848 usec\nrounds: 1535"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.645561813028646,
            "unit": "iter/sec",
            "range": "stddev: 0.015334101984202264",
            "extra": "mean: 274.30614300000684 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.76209060779716,
            "unit": "iter/sec",
            "range": "stddev: 0.02244034605194167",
            "extra": "mean: 72.66337858823805 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 178.8083077799406,
            "unit": "iter/sec",
            "range": "stddev: 0.0018642027486974275",
            "extra": "mean: 5.592581309089397 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.651593736761098,
            "unit": "iter/sec",
            "range": "stddev: 0.010067156250046894",
            "extra": "mean: 68.25196070588437 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "44c03b97bc57beece493192ed0aa9d6b63f77145",
          "message": "fix(deps): update all non-major dependencies (#34)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-20T21:38:41Z",
          "tree_id": "2c31b96111018dbe8404d37bc59e32fe9e81777a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/44c03b97bc57beece493192ed0aa9d6b63f77145"
        },
        "date": 1742506771413,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 350.4490012549621,
            "unit": "iter/sec",
            "range": "stddev: 0.001338846231506333",
            "extra": "mean: 2.8534822368418453 msec\nrounds: 304"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2044.1153556389218,
            "unit": "iter/sec",
            "range": "stddev: 0.000010802962104451172",
            "extra": "mean: 489.20918148840656 usec\nrounds: 1653"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.51165002736603,
            "unit": "iter/sec",
            "range": "stddev: 0.009765114887037006",
            "extra": "mean: 221.64839779999852 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.069030184638823,
            "unit": "iter/sec",
            "range": "stddev: 0.010265642270126272",
            "extra": "mean: 62.23150921428657 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.6977163467945,
            "unit": "iter/sec",
            "range": "stddev: 0.0027481967947930843",
            "extra": "mean: 5.534104249999503 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.335349052788654,
            "unit": "iter/sec",
            "range": "stddev: 0.009706098726415667",
            "extra": "mean: 61.21693492856752 msec\nrounds: 14"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7a1e7bec9e2603ba40b2b33b3c512e4d94f0af25",
          "message": "chore(deps): update dependency ruff to >=0.11.2 (#35)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-24T06:36:12Z",
          "tree_id": "5ffe39cf863d39dc175ce819ab5920af6c114611",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7a1e7bec9e2603ba40b2b33b3c512e4d94f0af25"
        },
        "date": 1742798226288,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 311.52115702772267,
            "unit": "iter/sec",
            "range": "stddev: 0.0014456909884681002",
            "extra": "mean: 3.210054846807752 msec\nrounds: 235"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1858.392169176902,
            "unit": "iter/sec",
            "range": "stddev: 0.0005699696955327703",
            "extra": "mean: 538.099555403803 usec\nrounds: 1471"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.5422246948713454,
            "unit": "iter/sec",
            "range": "stddev: 0.01344663130604003",
            "extra": "mean: 282.308460400003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.461476051827928,
            "unit": "iter/sec",
            "range": "stddev: 0.013024711835246602",
            "extra": "mean: 69.14923458823556 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.59355371411874,
            "unit": "iter/sec",
            "range": "stddev: 0.002157032893224867",
            "extra": "mean: 5.793959151315607 msec\nrounds: 152"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.001849288479937,
            "unit": "iter/sec",
            "range": "stddev: 0.013260420972713995",
            "extra": "mean: 71.41913752940856 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "805137c26188226219d0a58932c97d042d85d6e7",
          "message": "fix(deps): update all non-major dependencies (#36)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-03-31T06:14:06Z",
          "tree_id": "9f5c328b0613470a037852d6a584ec056df337e5",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/805137c26188226219d0a58932c97d042d85d6e7"
        },
        "date": 1743401692925,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 334.6278520770164,
            "unit": "iter/sec",
            "range": "stddev: 0.0015445260682449458",
            "extra": "mean: 2.9883944022981224 msec\nrounds: 261"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1999.0357931472265,
            "unit": "iter/sec",
            "range": "stddev: 0.000011058030757284596",
            "extra": "mean: 500.24116798110344 usec\nrounds: 1268"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.388328612349077,
            "unit": "iter/sec",
            "range": "stddev: 0.01317917895916917",
            "extra": "mean: 227.87719159999256 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.22597536718409,
            "unit": "iter/sec",
            "range": "stddev: 0.011866009920421638",
            "extra": "mean: 61.62957710526484 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 185.09498496338213,
            "unit": "iter/sec",
            "range": "stddev: 0.0018288943517043247",
            "extra": "mean: 5.402631520231804 msec\nrounds: 173"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.741393755430893,
            "unit": "iter/sec",
            "range": "stddev: 0.012310436850234573",
            "extra": "mean: 63.52677631578797 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "82c0f63e017f00a6a8b07974b28cda4303a59a70",
          "message": "chore(deps): lock file maintenance (#37)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-01T06:52:09Z",
          "tree_id": "8a7d89ea9cedf346120919248661285a48189c92",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/82c0f63e017f00a6a8b07974b28cda4303a59a70"
        },
        "date": 1743490376851,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 320.29626611495286,
            "unit": "iter/sec",
            "range": "stddev: 0.001553619732354293",
            "extra": "mean: 3.1221094523815163 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1990.4795775910056,
            "unit": "iter/sec",
            "range": "stddev: 0.000013165608735943421",
            "extra": "mean: 502.3914895978276 usec\nrounds: 1442"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7224970305194103,
            "unit": "iter/sec",
            "range": "stddev: 0.015935419132632734",
            "extra": "mean: 268.6368832000028 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.43579494824129,
            "unit": "iter/sec",
            "range": "stddev: 0.014450769995094068",
            "extra": "mean: 69.27225023529653 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.25005422065414,
            "unit": "iter/sec",
            "range": "stddev: 0.002311121521873152",
            "extra": "mean: 5.5787988703702975 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.201990721285881,
            "unit": "iter/sec",
            "range": "stddev: 0.013495094294792818",
            "extra": "mean: 70.41266394444297 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b7201de2252301ada85b59427161ff1f1b5c4809",
          "message": "chore(deps): update all non-major dependencies (#38)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-07T07:32:14Z",
          "tree_id": "cf57915455569f964edee5d55737d7a75f4e1060",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/b7201de2252301ada85b59427161ff1f1b5c4809"
        },
        "date": 1744011184451,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.7610204218658,
            "unit": "iter/sec",
            "range": "stddev: 0.00145341289491789",
            "extra": "mean: 3.0324991071433867 msec\nrounds: 252"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1888.355092244872,
            "unit": "iter/sec",
            "range": "stddev: 0.0006410057469922076",
            "extra": "mean: 529.5614178216886 usec\nrounds: 1515"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.5178398297581253,
            "unit": "iter/sec",
            "range": "stddev: 0.014065571057419431",
            "extra": "mean: 284.26535840000327 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.365411846266081,
            "unit": "iter/sec",
            "range": "stddev: 0.012979848508558373",
            "extra": "mean: 69.61164849999928 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.52176263051643,
            "unit": "iter/sec",
            "range": "stddev: 0.0019296395164066823",
            "extra": "mean: 5.478798722891614 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.055170628986131,
            "unit": "iter/sec",
            "range": "stddev: 0.013884065206172452",
            "extra": "mean: 71.1481935294111 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4a2ac2c552f0d5612c525dfd4a6573c9afb3341",
          "message": "chore(deps): update dependency ruff to >=0.11.5 (#39)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-14T06:52:59Z",
          "tree_id": "7ea4f8b43bb8fae66ff2846794f213bcc8697b02",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/e4a2ac2c552f0d5612c525dfd4a6573c9afb3341"
        },
        "date": 1744613625932,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 384.4305944164311,
            "unit": "iter/sec",
            "range": "stddev: 0.0009778497508393042",
            "extra": "mean: 2.6012497822084333 msec\nrounds: 326"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2191.210610589297,
            "unit": "iter/sec",
            "range": "stddev: 0.00036541181257590934",
            "extra": "mean: 456.3687283948772 usec\nrounds: 1782"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.773480246925852,
            "unit": "iter/sec",
            "range": "stddev: 0.00781396178211462",
            "extra": "mean: 209.49075899999912 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 17.143928256308907,
            "unit": "iter/sec",
            "range": "stddev: 0.007877821808677262",
            "extra": "mean: 58.329688799998536 msec\nrounds: 20"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 201.01907368297938,
            "unit": "iter/sec",
            "range": "stddev: 0.0018702163633569511",
            "extra": "mean: 4.9746523137255485 msec\nrounds: 204"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 17.249757061321684,
            "unit": "iter/sec",
            "range": "stddev: 0.0071906660843122335",
            "extra": "mean: 57.971830933332555 msec\nrounds: 15"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "fc2b06df89e20171745b6a0f4f6bc24367d81415",
          "message": "chore(deps): update dependency ruff to >=0.11.6 (#40)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-04-21T06:13:36Z",
          "tree_id": "24b3065a8fe322c86604d77997fbe09ee87f4645",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/fc2b06df89e20171745b6a0f4f6bc24367d81415"
        },
        "date": 1745216072373,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 323.17185132198045,
            "unit": "iter/sec",
            "range": "stddev: 0.0016321964154662931",
            "extra": "mean: 3.0943289024379994 msec\nrounds: 246"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1829.5853915786022,
            "unit": "iter/sec",
            "range": "stddev: 0.000036732982543471795",
            "extra": "mean: 546.5719198474691 usec\nrounds: 1310"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9210912261369986,
            "unit": "iter/sec",
            "range": "stddev: 0.011749857890087458",
            "extra": "mean: 255.03104679999637 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.951057575972929,
            "unit": "iter/sec",
            "range": "stddev: 0.013533152022635466",
            "extra": "mean: 66.88490061111452 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.75579678887172,
            "unit": "iter/sec",
            "range": "stddev: 0.0025132214315951025",
            "extra": "mean: 5.722270839508307 msec\nrounds: 162"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.137579433455215,
            "unit": "iter/sec",
            "range": "stddev: 0.016039810978989977",
            "extra": "mean: 70.73346641176754 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5c9aa7036251ceefd3b7828d308b6cba40f0b4d0",
          "message": "chore(deps): lock file maintenance (#42)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-07-22T01:56:22Z",
          "tree_id": "ef617797c68ecdd81a73b8fb0d94661d2ef7ef65",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5c9aa7036251ceefd3b7828d308b6cba40f0b4d0"
        },
        "date": 1753149453226,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 338.69327441047795,
            "unit": "iter/sec",
            "range": "stddev: 0.0016118567586346257",
            "extra": "mean: 2.9525239370063603 msec\nrounds: 254"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1920.3748967457188,
            "unit": "iter/sec",
            "range": "stddev: 0.000015273699881620592",
            "extra": "mean: 520.7316559358318 usec\nrounds: 1491"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.194862346536002,
            "unit": "iter/sec",
            "range": "stddev: 0.01645854326107123",
            "extra": "mean: 238.38684499999658 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.196138702354828,
            "unit": "iter/sec",
            "range": "stddev: 0.013056919723595961",
            "extra": "mean: 65.80619061110819 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 181.7861040468421,
            "unit": "iter/sec",
            "range": "stddev: 0.0021040812339914753",
            "extra": "mean: 5.500970523810352 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.968135122963412,
            "unit": "iter/sec",
            "range": "stddev: 0.01385122366608967",
            "extra": "mean: 66.80858983333513 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "23462edb41971a63347183aa619cb907f8cb842e",
          "message": "chore(deps): lock file maintenance (#43)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-01T05:04:31Z",
          "tree_id": "8d3c628ae941755d52d7d72ade3ce780338089b4",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/23462edb41971a63347183aa619cb907f8cb842e"
        },
        "date": 1754024732812,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 337.30479382286035,
            "unit": "iter/sec",
            "range": "stddev: 0.001671011187243783",
            "extra": "mean: 2.964677698963158 msec\nrounds: 289"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1957.7275111188596,
            "unit": "iter/sec",
            "range": "stddev: 0.000011650646072860582",
            "extra": "mean: 510.79631578987755 usec\nrounds: 1558"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.214611258987414,
            "unit": "iter/sec",
            "range": "stddev: 0.012247785671749355",
            "extra": "mean: 237.26980700000695 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.282759743735063,
            "unit": "iter/sec",
            "range": "stddev: 0.009712790239703591",
            "extra": "mean: 61.41465057142779 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.25512019939885,
            "unit": "iter/sec",
            "range": "stddev: 0.001476767672016689",
            "extra": "mean: 5.4272575921787745 msec\nrounds: 179"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.312311883870564,
            "unit": "iter/sec",
            "range": "stddev: 0.009321468816875202",
            "extra": "mean: 61.303388944444414 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "decb538b5b76a664684af1b7dad7b2ff98bf63c1",
          "message": "chore(deps): update dependency sqlalchemy to >=2.0.43 (#41)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-08-19T23:42:08Z",
          "tree_id": "2987201b0e34e29dbf026dc30df4b01e3bc567f9",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/decb538b5b76a664684af1b7dad7b2ff98bf63c1"
        },
        "date": 1755646980590,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 344.2954353224268,
            "unit": "iter/sec",
            "range": "stddev: 0.0018645358610873087",
            "extra": "mean: 2.904482306201699 msec\nrounds: 258"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1900.952325258369,
            "unit": "iter/sec",
            "range": "stddev: 0.00002197427709093049",
            "extra": "mean: 526.0521196206668 usec\nrounds: 1371"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9122796787962044,
            "unit": "iter/sec",
            "range": "stddev: 0.022637398998266604",
            "extra": "mean: 255.60544800000002 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.785317667983941,
            "unit": "iter/sec",
            "range": "stddev: 0.015920766662282784",
            "extra": "mean: 67.6346644999989 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 182.59109168400627,
            "unit": "iter/sec",
            "range": "stddev: 0.002366606653195906",
            "extra": "mean: 5.476718446541788 msec\nrounds: 159"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.905488693314688,
            "unit": "iter/sec",
            "range": "stddev: 0.0153462947905416",
            "extra": "mean: 67.08938033333409 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "7421803027bda5b7db40387aa3288cd9ad1c1780",
          "message": "fix(renovate): don't update python requirement\n\nSigned-off-by: Jan Vollmer <jan@vllmr.dev>",
          "timestamp": "2025-09-12T23:41:57+02:00",
          "tree_id": "a07d4af0dce5f0bb66a2a3de3f5a9a059acde856",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7421803027bda5b7db40387aa3288cd9ad1c1780"
        },
        "date": 1757713404983,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 312.13398847212534,
            "unit": "iter/sec",
            "range": "stddev: 0.001562450663050676",
            "extra": "mean: 3.203752352939621 msec\nrounds: 221"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1869.9113855649994,
            "unit": "iter/sec",
            "range": "stddev: 0.000013763176107578648",
            "extra": "mean: 534.7847003444214 usec\nrounds: 1455"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.761002314879445,
            "unit": "iter/sec",
            "range": "stddev: 0.016752356147054562",
            "extra": "mean: 265.88656860001265 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.037905540963623,
            "unit": "iter/sec",
            "range": "stddev: 0.012671935054656643",
            "extra": "mean: 66.4986222500185 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.6540619702231,
            "unit": "iter/sec",
            "range": "stddev: 0.002516276423565081",
            "extra": "mean: 5.859807779872752 msec\nrounds: 159"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.712447241621382,
            "unit": "iter/sec",
            "range": "stddev: 0.012927086846028231",
            "extra": "mean: 67.96965750001188 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "66853113+pre-commit-ci[bot]@users.noreply.github.com",
            "name": "pre-commit-ci[bot]",
            "username": "pre-commit-ci[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "47d5c4bcf1c54be76e470ff7a6bc3ce85d627648",
          "message": "[pre-commit.ci] pre-commit autoupdate (#33)\n\nupdates:\n- [github.com/asottile/pyupgrade: v3.19.1 → v3.20.0](https://github.com/asottile/pyupgrade/compare/v3.19.1...v3.20.0)\n- [github.com/adamchainz/blacken-docs: 1.19.1 → 1.20.0](https://github.com/adamchainz/blacken-docs/compare/1.19.1...1.20.0)\n- [github.com/astral-sh/ruff-pre-commit: v0.9.9 → v0.12.12](https://github.com/astral-sh/ruff-pre-commit/compare/v0.9.9...v0.12.12)\n- [github.com/jvllmr/pre-commit-prettier: v3.5.0 → v3.6.2](https://github.com/jvllmr/pre-commit-prettier/compare/v3.5.0...v3.6.2)\n- [github.com/pre-commit/mirrors-mypy: v1.15.0 → v1.17.1](https://github.com/pre-commit/mirrors-mypy/compare/v1.15.0...v1.17.1)\n- [github.com/pre-commit/pre-commit-hooks: v5.0.0 → v6.0.0](https://github.com/pre-commit/pre-commit-hooks/compare/v5.0.0...v6.0.0)\n\nCo-authored-by: pre-commit-ci[bot] <66853113+pre-commit-ci[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-12T23:45:30+02:00",
          "tree_id": "059d1abe5637d3f18156805e64d1b497546af8a3",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/47d5c4bcf1c54be76e470ff7a6bc3ce85d627648"
        },
        "date": 1757713579910,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 318.1313498967667,
            "unit": "iter/sec",
            "range": "stddev: 0.000050005018878067586",
            "extra": "mean: 3.143355725000063 msec\nrounds: 40"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1805.213598453298,
            "unit": "iter/sec",
            "range": "stddev: 0.000024074682828722618",
            "extra": "mean: 553.9510675394853 usec\nrounds: 1451"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.3891316097960655,
            "unit": "iter/sec",
            "range": "stddev: 0.01397252488818878",
            "extra": "mean: 295.06083419999527 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.413887515406325,
            "unit": "iter/sec",
            "range": "stddev: 0.01137130472405291",
            "extra": "mean: 69.37753599999634 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.06759382832308,
            "unit": "iter/sec",
            "range": "stddev: 0.0002536938008626734",
            "extra": "mean: 5.712079421052832 msec\nrounds: 152"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.963854767285406,
            "unit": "iter/sec",
            "range": "stddev: 0.012297702225479313",
            "extra": "mean: 71.61346323529555 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "11a4fd1bc77375d8b9990f5b3c0532289cfa1cb3",
          "message": "chore(deps): update actions/checkout action to v5 (#44)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-12T23:45:43+02:00",
          "tree_id": "5e35135f3b158f061304fd24061cef9e447c2907",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/11a4fd1bc77375d8b9990f5b3c0532289cfa1cb3"
        },
        "date": 1757713596824,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 343.5400494505264,
            "unit": "iter/sec",
            "range": "stddev: 0.0014840225491228392",
            "extra": "mean: 2.910868766536669 msec\nrounds: 257"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1917.4029971017621,
            "unit": "iter/sec",
            "range": "stddev: 0.0005862668846214239",
            "extra": "mean: 521.53876963348 usec\nrounds: 1528"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.789820416236763,
            "unit": "iter/sec",
            "range": "stddev: 0.03955724815052151",
            "extra": "mean: 263.8647456000001 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.417455443985853,
            "unit": "iter/sec",
            "range": "stddev: 0.013486724080165699",
            "extra": "mean: 69.36036694444188 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 181.1365333326112,
            "unit": "iter/sec",
            "range": "stddev: 0.002677450419705768",
            "extra": "mean: 5.520697462856674 msec\nrounds: 175"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.601962121137943,
            "unit": "iter/sec",
            "range": "stddev: 0.01307094558456973",
            "extra": "mean: 68.48394699999874 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a7b331d6dc39a1c754a1f5ced7ad778a6540016e",
          "message": "chore(deps): update dependency pytest-cov to v7 (#46)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-14T18:22:50+02:00",
          "tree_id": "07e6d811d2128c11596826b88b55e9ee77d702e2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/a7b331d6dc39a1c754a1f5ced7ad778a6540016e"
        },
        "date": 1757867025352,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 330.28699524183673,
            "unit": "iter/sec",
            "range": "stddev: 0.001523344927412096",
            "extra": "mean: 3.02766991860457 msec\nrounds: 258"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1775.226726187012,
            "unit": "iter/sec",
            "range": "stddev: 0.0008505693030617493",
            "extra": "mean: 563.308328591857 usec\nrounds: 1406"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.500736150901188,
            "unit": "iter/sec",
            "range": "stddev: 0.020212348516453767",
            "extra": "mean: 285.6542044000008 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.426590188216455,
            "unit": "iter/sec",
            "range": "stddev: 0.0153307839711244",
            "extra": "mean: 74.47907368749718 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.56046338392864,
            "unit": "iter/sec",
            "range": "stddev: 0.0026524523623968304",
            "extra": "mean: 5.795070205479841 msec\nrounds: 146"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 12.854750235968886,
            "unit": "iter/sec",
            "range": "stddev: 0.016383283688871618",
            "extra": "mean: 77.79225435293945 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "7d4b360f643c66982b659493f78b03a3d2405ed0",
          "message": "chore(deps): update all non-major dependencies (#45)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-14T20:25:22Z",
          "tree_id": "5e66b1de9b2ee948916a7694b1d268ee0ed6f914",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/7d4b360f643c66982b659493f78b03a3d2405ed0"
        },
        "date": 1757881577622,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.2991178426244,
            "unit": "iter/sec",
            "range": "stddev: 0.0020244255395489245",
            "extra": "mean: 3.1918379052133727 msec\nrounds: 211"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1895.2183082593172,
            "unit": "iter/sec",
            "range": "stddev: 0.000016181694347777147",
            "extra": "mean: 527.6436997479517 usec\nrounds: 1189"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.487194056425919,
            "unit": "iter/sec",
            "range": "stddev: 0.022320162534942314",
            "extra": "mean: 286.7635077999978 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.371123314605539,
            "unit": "iter/sec",
            "range": "stddev: 0.01755873518809087",
            "extra": "mean: 74.78803212499585 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 169.1319777413119,
            "unit": "iter/sec",
            "range": "stddev: 0.003184902223510759",
            "extra": "mean: 5.912542461541509 msec\nrounds: 143"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.519485891487962,
            "unit": "iter/sec",
            "range": "stddev: 0.01651174880102924",
            "extra": "mean: 73.96730970588257 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "345ac160740185c49d15200f4936781cd56ac8cb",
          "message": "chore(deps): update all non-major dependencies (#48)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-09-25T22:03:15Z",
          "tree_id": "07032010fb62e8fef0163887656259664c41ffce",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/345ac160740185c49d15200f4936781cd56ac8cb"
        },
        "date": 1758837840231,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 332.88450252137415,
            "unit": "iter/sec",
            "range": "stddev: 0.0002690534259405395",
            "extra": "mean: 3.0040449237668887 msec\nrounds: 223"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1904.7306038702561,
            "unit": "iter/sec",
            "range": "stddev: 0.000015853978082479763",
            "extra": "mean: 525.0086274500353 usec\nrounds: 51"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.18712782745707,
            "unit": "iter/sec",
            "range": "stddev: 0.012280733268541209",
            "extra": "mean: 238.82719640000118 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.147588712913166,
            "unit": "iter/sec",
            "range": "stddev: 0.014558557133427876",
            "extra": "mean: 66.01710800000201 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.41346162067038,
            "unit": "iter/sec",
            "range": "stddev: 0.0016889127043719378",
            "extra": "mean: 5.573717774390175 msec\nrounds: 164"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.013862583883444,
            "unit": "iter/sec",
            "range": "stddev: 0.010296766588596039",
            "extra": "mean: 62.445896157895895 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "dbbc0f3d4f54ac0ce8658bdc83d75d1b6fd70b96",
          "message": "chore(deps): lock file maintenance (#49)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-01T20:51:08Z",
          "tree_id": "ec83f4bb670d3f48152091fc8ab8d6d7262ce5bd",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/dbbc0f3d4f54ac0ce8658bdc83d75d1b6fd70b96"
        },
        "date": 1759351918386,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 312.2498518018575,
            "unit": "iter/sec",
            "range": "stddev: 0.0018052388358705416",
            "extra": "mean: 3.2025635696204073 msec\nrounds: 237"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1864.8638195685728,
            "unit": "iter/sec",
            "range": "stddev: 0.000013043921784226486",
            "extra": "mean: 536.2321846274787 usec\nrounds: 1327"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.022446389736453,
            "unit": "iter/sec",
            "range": "stddev: 0.027722518062221844",
            "extra": "mean: 330.85781220000285 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.304359177524924,
            "unit": "iter/sec",
            "range": "stddev: 0.016492755260882876",
            "extra": "mean: 75.16333456250202 msec\nrounds: 16"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 162.38364822563773,
            "unit": "iter/sec",
            "range": "stddev: 0.002775448344512053",
            "extra": "mean: 6.158255532050032 msec\nrounds: 156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.283437986959296,
            "unit": "iter/sec",
            "range": "stddev: 0.015731907075499308",
            "extra": "mean: 75.28171554545793 msec\nrounds: 11"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "4fd9b4f68a703c0297644a6c1116be6d3b342017",
          "message": "chore: update README\n\nSigned-off-by: Jan Vollmer <jan@vllmr.dev>",
          "timestamp": "2025-10-16T20:21:16+02:00",
          "tree_id": "356434c85030a5bfaed58d2fbe1cc6f75257cd89",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/4fd9b4f68a703c0297644a6c1116be6d3b342017"
        },
        "date": 1760638938439,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 313.21781850512673,
            "unit": "iter/sec",
            "range": "stddev: 0.00132834432423662",
            "extra": "mean: 3.1926663839644616 msec\nrounds: 237"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1807.8402714781432,
            "unit": "iter/sec",
            "range": "stddev: 0.000014379125822707597",
            "extra": "mean: 553.1462130680221 usec\nrounds: 1408"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.015798843367315,
            "unit": "iter/sec",
            "range": "stddev: 0.014010801180931372",
            "extra": "mean: 249.01645699999335 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.719419017811136,
            "unit": "iter/sec",
            "range": "stddev: 0.010993356166708547",
            "extra": "mean: 63.61558266669615 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 170.09985819426848,
            "unit": "iter/sec",
            "range": "stddev: 0.0018618217311208198",
            "extra": "mean: 5.878899668792876 msec\nrounds: 157"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.436917336183424,
            "unit": "iter/sec",
            "range": "stddev: 0.01216783413834356",
            "extra": "mean: 64.77977294443666 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "d321649dcf05ddb20d8cc582e295a1ec46824cfe",
          "message": "fix(tests): make loader test less flaky\n\nSigned-off-by: Jan Vollmer <jan@vllmr.dev>",
          "timestamp": "2025-10-16T20:34:45+02:00",
          "tree_id": "6e9d2a6b45a0f3bef326ea81567ba920c36f897f",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/d321649dcf05ddb20d8cc582e295a1ec46824cfe"
        },
        "date": 1760639739237,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 354.1494641904385,
            "unit": "iter/sec",
            "range": "stddev: 0.0012853911803079527",
            "extra": "mean: 2.8236665620430395 msec\nrounds: 274"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2083.505448765981,
            "unit": "iter/sec",
            "range": "stddev: 0.000014050174560740418",
            "extra": "mean: 479.96034788019404 usec\nrounds: 1604"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.0844543541730705,
            "unit": "iter/sec",
            "range": "stddev: 0.018771817597514225",
            "extra": "mean: 244.83074439999655 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.982169894399483,
            "unit": "iter/sec",
            "range": "stddev: 0.011838778978752613",
            "extra": "mean: 66.7460058888941 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 186.79490739198005,
            "unit": "iter/sec",
            "range": "stddev: 0.001822133188766656",
            "extra": "mean: 5.353465005882352 msec\nrounds: 170"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.039384551218177,
            "unit": "iter/sec",
            "range": "stddev: 0.012552131110508229",
            "extra": "mean: 66.49208261111994 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "committer": {
            "email": "jan@vllmr.dev",
            "name": "Jan Vollmer",
            "username": "jvllmr"
          },
          "distinct": true,
          "id": "9783cb49e69d9609a405f7b112f4258700e91b84",
          "message": "chore: stop support for python 3.9\n\nSigned-off-by: Jan Vollmer <jan@vllmr.dev>",
          "timestamp": "2025-10-16T20:40:17+02:00",
          "tree_id": "0b797262c8eb68d868721d5d429c1352e8b2d43e",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/9783cb49e69d9609a405f7b112f4258700e91b84"
        },
        "date": 1760640076750,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 319.66771531121475,
            "unit": "iter/sec",
            "range": "stddev: 0.001318176530647454",
            "extra": "mean: 3.1282483407072963 msec\nrounds: 226"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1885.593955326128,
            "unit": "iter/sec",
            "range": "stddev: 0.00001528111078472701",
            "extra": "mean: 530.33687193118 usec\nrounds: 1507"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.097845328175236,
            "unit": "iter/sec",
            "range": "stddev: 0.011504673219997546",
            "extra": "mean: 244.03068440001334 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.047964827724204,
            "unit": "iter/sec",
            "range": "stddev: 0.010265983680358685",
            "extra": "mean: 62.31319738889359 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 178.71710223487656,
            "unit": "iter/sec",
            "range": "stddev: 0.0016450052694989125",
            "extra": "mean: 5.5954353975914595 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.491243318295624,
            "unit": "iter/sec",
            "range": "stddev: 0.010357547050656153",
            "extra": "mean: 64.55259784209638 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "ca2b6775e5421445d4a103a0f32f474ebb9f8832",
          "message": "fix(deps): update all non-major dependencies (#50)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-16T20:43:40+02:00",
          "tree_id": "749c0d125ae9c8937d232c24c66a357ffeaab10a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/ca2b6775e5421445d4a103a0f32f474ebb9f8832"
        },
        "date": 1760640282793,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.8893743168365,
            "unit": "iter/sec",
            "range": "stddev: 0.002045215518251298",
            "extra": "mean: 3.0779707772922933 msec\nrounds: 229"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1925.076357772008,
            "unit": "iter/sec",
            "range": "stddev: 0.000012367566252837134",
            "extra": "mean: 519.459914388722 usec\nrounds: 1390"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.110488851881107,
            "unit": "iter/sec",
            "range": "stddev: 0.017782439364637474",
            "extra": "mean: 243.28006620000053 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.717487253966235,
            "unit": "iter/sec",
            "range": "stddev: 0.016936926250807408",
            "extra": "mean: 67.94638124999963 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 172.7075203781406,
            "unit": "iter/sec",
            "range": "stddev: 0.002333229319844884",
            "extra": "mean: 5.790135819277091 msec\nrounds: 166"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.441844247286504,
            "unit": "iter/sec",
            "range": "stddev: 0.015619348354938145",
            "extra": "mean: 64.7591041578938 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a05392a1bfe6a5a7a75b13356b0faff0753fbe57",
          "message": "chore(deps): update all non-major dependencies (#52)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-20T05:39:10Z",
          "tree_id": "db963f392fb483629524a1491cdcca0a96260ed7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/a05392a1bfe6a5a7a75b13356b0faff0753fbe57"
        },
        "date": 1760938797960,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 329.1406902648657,
            "unit": "iter/sec",
            "range": "stddev: 0.0013344688563985214",
            "extra": "mean: 3.0382144462153287 msec\nrounds: 251"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1925.5428602247946,
            "unit": "iter/sec",
            "range": "stddev: 0.000026290600798147622",
            "extra": "mean: 519.3340645158407 usec\nrounds: 1395"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8904354679654234,
            "unit": "iter/sec",
            "range": "stddev: 0.021739442233003507",
            "extra": "mean: 257.0406341999984 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.188096077239866,
            "unit": "iter/sec",
            "range": "stddev: 0.011762520251014388",
            "extra": "mean: 65.84103727777644 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 180.12866439639566,
            "unit": "iter/sec",
            "range": "stddev: 0.0017113071745966557",
            "extra": "mean: 5.551587268750158 msec\nrounds: 160"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.035368951331172,
            "unit": "iter/sec",
            "range": "stddev: 0.012246546304511496",
            "extra": "mean: 66.50984111111313 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "01140788906d69002da0858a01945e8638e67543",
          "message": "chore(deps): update all non-major dependencies (#53)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-10-27T05:58:42Z",
          "tree_id": "8ee4e9c62ac03e6c6417f87786b19e680393e9b0",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/01140788906d69002da0858a01945e8638e67543"
        },
        "date": 1761544785453,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 339.347727949998,
            "unit": "iter/sec",
            "range": "stddev: 0.00006740116794622834",
            "extra": "mean: 2.9468298079996202 msec\nrounds: 250"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1959.101444675911,
            "unit": "iter/sec",
            "range": "stddev: 0.000021401308089184204",
            "extra": "mean: 510.43809023653057 usec\nrounds: 1352"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.988827956634405,
            "unit": "iter/sec",
            "range": "stddev: 0.019165600974294688",
            "extra": "mean: 250.7002084000021 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.629163885989056,
            "unit": "iter/sec",
            "range": "stddev: 0.01817816025737068",
            "extra": "mean: 73.37207244444481 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 160.7264050177166,
            "unit": "iter/sec",
            "range": "stddev: 0.0030020346869002123",
            "extra": "mean: 6.221753046052214 msec\nrounds: 152"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.742446582461351,
            "unit": "iter/sec",
            "range": "stddev: 0.01859831400564171",
            "extra": "mean: 72.76724664705914 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "56798266d97f758b0d8e4415dcf3a03bf1a39656",
          "message": "chore(deps): lock file maintenance (#54)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-01T05:32:29Z",
          "tree_id": "5bbb1af587ccfd760148c956506fe98944eab18f",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/56798266d97f758b0d8e4415dcf3a03bf1a39656"
        },
        "date": 1761975199483,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.7456508174171,
            "unit": "iter/sec",
            "range": "stddev: 0.0012882906178903206",
            "extra": "mean: 3.2706924769869343 msec\nrounds: 239"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1755.5510467753538,
            "unit": "iter/sec",
            "range": "stddev: 0.000573281552845621",
            "extra": "mean: 569.6217161197496 usec\nrounds: 1402"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.768668570849269,
            "unit": "iter/sec",
            "range": "stddev: 0.015262544175003728",
            "extra": "mean: 265.3457000000003 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.220745392288528,
            "unit": "iter/sec",
            "range": "stddev: 0.011563348294680127",
            "extra": "mean: 65.6998047222209 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 171.3745876322337,
            "unit": "iter/sec",
            "range": "stddev: 0.002201590717746416",
            "extra": "mean: 5.83517086060612 msec\nrounds: 165"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.94116516539923,
            "unit": "iter/sec",
            "range": "stddev: 0.012050035566638225",
            "extra": "mean: 66.92918450000145 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5b608a0782f9e147cfef0badbae18a27c7de241d",
          "message": "chore(deps): update all non-major dependencies (#55)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-03T05:59:50Z",
          "tree_id": "566913c60d10a88bfbd2ab327e7b81716a1f77e2",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5b608a0782f9e147cfef0badbae18a27c7de241d"
        },
        "date": 1762149632459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 319.4882273869018,
            "unit": "iter/sec",
            "range": "stddev: 0.0015839067993860133",
            "extra": "mean: 3.130005785123954 msec\nrounds: 242"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1886.448834892833,
            "unit": "iter/sec",
            "range": "stddev: 0.000015741695953509876",
            "extra": "mean: 530.0965398602019 usec\nrounds: 1430"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.211460355632723,
            "unit": "iter/sec",
            "range": "stddev: 0.01617243600539114",
            "extra": "mean: 237.4473260000002 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.306419141007876,
            "unit": "iter/sec",
            "range": "stddev: 0.012842816750175649",
            "extra": "mean: 65.33206694444102 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 174.8817499492882,
            "unit": "iter/sec",
            "range": "stddev: 0.0021820683447755776",
            "extra": "mean: 5.718149551282381 msec\nrounds: 156"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.144482655470096,
            "unit": "iter/sec",
            "range": "stddev: 0.012776171798670213",
            "extra": "mean: 66.03064777777708 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "45abf68019dfa0fc318d9c0feecbc457f42e4527",
          "message": "chore(deps): update dependency pytest to v9 (#57)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-10T07:34:29+01:00",
          "tree_id": "7401a3286017206ebeead1141d4161afa8cd0f4a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/45abf68019dfa0fc318d9c0feecbc457f42e4527"
        },
        "date": 1762756516159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 340.3727851726142,
            "unit": "iter/sec",
            "range": "stddev: 0.001526752414657506",
            "extra": "mean: 2.9379552172270973 msec\nrounds: 267"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2032.0436467075658,
            "unit": "iter/sec",
            "range": "stddev: 0.000013650242813692152",
            "extra": "mean: 492.11541377088906 usec\nrounds: 1554"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.041880507508427,
            "unit": "iter/sec",
            "range": "stddev: 0.01968647185769088",
            "extra": "mean: 247.4095901999931 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.531219973731961,
            "unit": "iter/sec",
            "range": "stddev: 0.013081573321558067",
            "extra": "mean: 68.81734649999771 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 184.41092700467283,
            "unit": "iter/sec",
            "range": "stddev: 0.0020217064733403733",
            "extra": "mean: 5.4226721607156225 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.457320337411078,
            "unit": "iter/sec",
            "range": "stddev: 0.014426296755467374",
            "extra": "mean: 69.1691113333298 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "db4332b283478b86f8a1555757e003bfe9c75e93",
          "message": "chore(deps): update all non-major dependencies (#56)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-10T11:34:52Z",
          "tree_id": "205ce08dfb24b605fd3dedd8d9c9ba732748b9c3",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/db4332b283478b86f8a1555757e003bfe9c75e93"
        },
        "date": 1762774542735,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 350.9040908241424,
            "unit": "iter/sec",
            "range": "stddev: 0.0018094921114815716",
            "extra": "mean: 2.84978153902787 msec\nrounds: 269"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2035.8202261824918,
            "unit": "iter/sec",
            "range": "stddev: 0.000011259426292140507",
            "extra": "mean: 491.20250753926814 usec\nrounds: 1328"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.903973352189424,
            "unit": "iter/sec",
            "range": "stddev: 0.021754037424586023",
            "extra": "mean: 256.14928940003665 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.888245979394169,
            "unit": "iter/sec",
            "range": "stddev: 0.01254034383323174",
            "extra": "mean: 67.16707941177447 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 188.2292773192473,
            "unit": "iter/sec",
            "range": "stddev: 0.002007523046197519",
            "extra": "mean: 5.312669815460985 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.585524227633849,
            "unit": "iter/sec",
            "range": "stddev: 0.013519846502637978",
            "extra": "mean: 68.56112844441971 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ec9198e1ce8dc0007bf12ff4d6a46ae640b97dd",
          "message": "chore(deps): update all non-major dependencies (#58)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-17T05:25:36Z",
          "tree_id": "91a579030cb9940c468f0edeaa62c1a2872da924",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/0ec9198e1ce8dc0007bf12ff4d6a46ae640b97dd"
        },
        "date": 1763357188662,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 327.4290256534795,
            "unit": "iter/sec",
            "range": "stddev: 0.001568155653263058",
            "extra": "mean: 3.0540969848479684 msec\nrounds: 264"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1845.8009435962686,
            "unit": "iter/sec",
            "range": "stddev: 0.0006600183490891648",
            "extra": "mean: 541.7702290538701 usec\nrounds: 1480"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.128635646514494,
            "unit": "iter/sec",
            "range": "stddev: 0.013785934733216071",
            "extra": "mean: 242.21076540000013 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.395312335230367,
            "unit": "iter/sec",
            "range": "stddev: 0.011574758319389422",
            "extra": "mean: 64.95483678571544 msec\nrounds: 14"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 178.66292044843345,
            "unit": "iter/sec",
            "range": "stddev: 0.002024257913249899",
            "extra": "mean: 5.597132284024345 msec\nrounds: 169"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.891310841282554,
            "unit": "iter/sec",
            "range": "stddev: 0.012687530615026432",
            "extra": "mean: 67.15325538889043 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "012ce2cafe2d297dfc948c768c895d63cc32bb66",
          "message": "chore(deps): update all non-major dependencies (#60)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-11-24T05:13:08Z",
          "tree_id": "ff445a93610021891630e9465b21502cc873b4b3",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/012ce2cafe2d297dfc948c768c895d63cc32bb66"
        },
        "date": 1763961232367,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 326.63980463539406,
            "unit": "iter/sec",
            "range": "stddev: 0.0015143901083107764",
            "extra": "mean: 3.0614762371543556 msec\nrounds: 253"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1903.985906386734,
            "unit": "iter/sec",
            "range": "stddev: 0.000020642759118807802",
            "extra": "mean: 525.2139717240543 usec\nrounds: 1450"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.043374219787717,
            "unit": "iter/sec",
            "range": "stddev: 0.014608214403729648",
            "extra": "mean: 247.3181916000101 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.732674823592076,
            "unit": "iter/sec",
            "range": "stddev: 0.012254735600489383",
            "extra": "mean: 63.56198238461275 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 179.50223063416954,
            "unit": "iter/sec",
            "range": "stddev: 0.0016721411528289644",
            "extra": "mean: 5.570961410713761 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.993721927397269,
            "unit": "iter/sec",
            "range": "stddev: 0.013329008416262732",
            "extra": "mean: 66.69458089473771 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "edcf5e341dd39883a29ce64d6a0be66cc1cdf57a",
          "message": "chore(deps): update all non-major dependencies (#62)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-01T08:54:01Z",
          "tree_id": "67e81c50ad12ca8f1f04106e48481a1a9eb0c4fa",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/edcf5e341dd39883a29ce64d6a0be66cc1cdf57a"
        },
        "date": 1764579287444,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 326.64465735837837,
            "unit": "iter/sec",
            "range": "stddev: 0.0014390881285707496",
            "extra": "mean: 3.061430755020277 msec\nrounds: 249"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1899.4721963899656,
            "unit": "iter/sec",
            "range": "stddev: 0.000012313769555317171",
            "extra": "mean: 526.4620360858906 usec\nrounds: 1441"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.7237879679003685,
            "unit": "iter/sec",
            "range": "stddev: 0.020406280523452346",
            "extra": "mean: 268.54375400000094 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.6995994150909,
            "unit": "iter/sec",
            "range": "stddev: 0.013411684505912312",
            "extra": "mean: 68.02906472222503 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 176.8005541862405,
            "unit": "iter/sec",
            "range": "stddev: 0.0025363612931702736",
            "extra": "mean: 5.656090868055802 msec\nrounds: 144"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 14.701748915395308,
            "unit": "iter/sec",
            "range": "stddev: 0.012759486036625184",
            "extra": "mean: 68.01911838888941 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "1fffc02efd11fd75bbb2e7529e2a24ef3c7c142c",
          "message": "chore(deps): lock file maintenance (#63)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-01T16:02:00Z",
          "tree_id": "68cfeddac39aa50a2cd25875f7892bd659ac04e7",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/1fffc02efd11fd75bbb2e7529e2a24ef3c7c142c"
        },
        "date": 1764604969159,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 352.48738564029264,
            "unit": "iter/sec",
            "range": "stddev: 0.0011590206896585258",
            "extra": "mean: 2.836980955172345 msec\nrounds: 290"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2214.20822062747,
            "unit": "iter/sec",
            "range": "stddev: 0.000007800224424578363",
            "extra": "mean: 451.62870893714614 usec\nrounds: 1656"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.103444766624388,
            "unit": "iter/sec",
            "range": "stddev: 0.015386340281298403",
            "extra": "mean: 243.69768740000097 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.257021267836906,
            "unit": "iter/sec",
            "range": "stddev: 0.011630432726224608",
            "extra": "mean: 65.54359350000283 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 192.80391561108647,
            "unit": "iter/sec",
            "range": "stddev: 0.00233080499639664",
            "extra": "mean: 5.186616655738182 msec\nrounds: 183"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.962309931311358,
            "unit": "iter/sec",
            "range": "stddev: 0.010308123431616526",
            "extra": "mean: 62.64757446153951 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "a0467c9b7f24aed273d272c285e4f14cac7d87de",
          "message": "chore(deps): update actions/checkout action to v6 (#61)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-01T21:42:03+01:00",
          "tree_id": "4fc7b2af0156c21d23c3dfdbc2aa6827589ba291",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/a0467c9b7f24aed273d272c285e4f14cac7d87de"
        },
        "date": 1764621768489,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 305.4863490505701,
            "unit": "iter/sec",
            "range": "stddev: 0.0014534225772653334",
            "extra": "mean: 3.273468693799016 msec\nrounds: 258"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1856.605017057614,
            "unit": "iter/sec",
            "range": "stddev: 0.0007027132150462657",
            "extra": "mean: 538.6175254361967 usec\nrounds: 1376"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8520333765563994,
            "unit": "iter/sec",
            "range": "stddev: 0.01537549114908672",
            "extra": "mean: 259.6031504000024 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.63462993451796,
            "unit": "iter/sec",
            "range": "stddev: 0.013018445810236059",
            "extra": "mean: 63.960580083332275 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 175.8348160532281,
            "unit": "iter/sec",
            "range": "stddev: 0.001925592581792093",
            "extra": "mean: 5.687155834355828 msec\nrounds: 163"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.322650989996339,
            "unit": "iter/sec",
            "range": "stddev: 0.013416979418621206",
            "extra": "mean: 65.26285827777893 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "793a02162310f722c9c764662273cf2b424c9ff6",
          "message": "chore(deps): update all non-major dependencies (#64)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-08T08:59:27Z",
          "tree_id": "0799b4bbbb6469f8b8bd3d53e3aef96e89e815e4",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/793a02162310f722c9c764662273cf2b424c9ff6"
        },
        "date": 1765184414544,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 350.8660763191623,
            "unit": "iter/sec",
            "range": "stddev: 0.0020041802313938025",
            "extra": "mean: 2.850090297958469 msec\nrounds: 245"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2033.4424073250298,
            "unit": "iter/sec",
            "range": "stddev: 0.000020425911528297333",
            "extra": "mean: 491.77689832656165 usec\nrounds: 1554"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.968257375916274,
            "unit": "iter/sec",
            "range": "stddev: 0.014911612840627664",
            "extra": "mean: 251.99978359999875 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 13.91138538628543,
            "unit": "iter/sec",
            "range": "stddev: 0.018507217814281503",
            "extra": "mean: 71.88356674999834 msec\nrounds: 12"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 190.6869261894643,
            "unit": "iter/sec",
            "range": "stddev: 0.0003915661845791483",
            "extra": "mean: 5.244198016000382 msec\nrounds: 125"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.486822292302701,
            "unit": "iter/sec",
            "range": "stddev: 0.021269430818441105",
            "extra": "mean: 74.14645038889016 msec\nrounds: 18"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "e4f237b218cd44abd1e9427112658f1eb4669a0e",
          "message": "fix(deps): update all non-major dependencies (#65)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-15T10:01:38Z",
          "tree_id": "949f89036a578e87c17da9e754ed47231d1aed6f",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/e4f237b218cd44abd1e9427112658f1eb4669a0e"
        },
        "date": 1765792952459,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 324.8889711170003,
            "unit": "iter/sec",
            "range": "stddev: 0.0012255801733601858",
            "extra": "mean: 3.077974597173617 msec\nrounds: 283"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1868.2504777652734,
            "unit": "iter/sec",
            "range": "stddev: 0.000014079429285191032",
            "extra": "mean: 535.2601334250212 usec\nrounds: 1454"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.8232291933669686,
            "unit": "iter/sec",
            "range": "stddev: 0.01170326142960038",
            "extra": "mean: 261.55899880000106 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 14.982819487330273,
            "unit": "iter/sec",
            "range": "stddev: 0.00919222754949109",
            "extra": "mean: 66.74311205882292 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.27638098857688,
            "unit": "iter/sec",
            "range": "stddev: 0.0016845797164602196",
            "extra": "mean: 5.640909377907691 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.1285454351368,
            "unit": "iter/sec",
            "range": "stddev: 0.008990903162358498",
            "extra": "mean: 66.10020800000046 msec\nrounds: 17"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "5bc589b910705a86f3d479ec5027cf88c50c6e39",
          "message": "chore(deps): update all non-major dependencies (#66)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-22T06:51:14Z",
          "tree_id": "5fc8157915e214d7c93d7b2944bd37b35f003604",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/5bc589b910705a86f3d479ec5027cf88c50c6e39"
        },
        "date": 1766386325903,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 345.52151964073846,
            "unit": "iter/sec",
            "range": "stddev: 0.0013779992140866048",
            "extra": "mean: 2.894175740601529 msec\nrounds: 266"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1985.8808430638303,
            "unit": "iter/sec",
            "range": "stddev: 0.000013578571534503517",
            "extra": "mean: 503.55488522523507 usec\nrounds: 1577"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.073005206782383,
            "unit": "iter/sec",
            "range": "stddev: 0.01648997868833814",
            "extra": "mean: 245.5189594000018 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.371264981154962,
            "unit": "iter/sec",
            "range": "stddev: 0.010496335024064654",
            "extra": "mean: 65.05645444444497 msec\nrounds: 18"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 183.36992224343,
            "unit": "iter/sec",
            "range": "stddev: 0.0018220605763550586",
            "extra": "mean: 5.453457076087237 msec\nrounds: 184"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.64591793409602,
            "unit": "iter/sec",
            "range": "stddev: 0.010508816995147824",
            "extra": "mean: 63.9144346923086 msec\nrounds: 13"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0ac593cb5e8819821e45e9a1530f16b41d1c2d7f",
          "message": "chore(deps): update dependency faker to >=39.0.0 (#68)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2025-12-29T04:24:29Z",
          "tree_id": "f168d82844e5bf20e41118e98eac168917d3f51a",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/0ac593cb5e8819821e45e9a1530f16b41d1c2d7f"
        },
        "date": 1766982315243,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 350.5270076721919,
            "unit": "iter/sec",
            "range": "stddev: 0.0014405259793981745",
            "extra": "mean: 2.852847221790072 msec\nrounds: 257"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 2185.3843340412923,
            "unit": "iter/sec",
            "range": "stddev: 0.00001171010054632599",
            "extra": "mean: 457.5854161774664 usec\nrounds: 1533"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.34454907292612,
            "unit": "iter/sec",
            "range": "stddev: 0.013316757984530908",
            "extra": "mean: 230.1734847999967 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 16.437845539467652,
            "unit": "iter/sec",
            "range": "stddev: 0.011955853473311523",
            "extra": "mean: 60.83522305882341 msec\nrounds: 17"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 191.25863202367628,
            "unit": "iter/sec",
            "range": "stddev: 0.0019563420715126676",
            "extra": "mean: 5.228522181818221 msec\nrounds: 176"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 16.463927965788585,
            "unit": "iter/sec",
            "range": "stddev: 0.01216914092621414",
            "extra": "mean: 60.7388468947363 msec\nrounds: 19"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "66292725ea87f9cb5290b52eea564676971aa714",
          "message": "chore(deps): update dependency faker to >=39.1.0 (#69)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-05T07:05:16Z",
          "tree_id": "94d34e62f2350a80eff0da0d4e12ef300a5b8bfc",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/66292725ea87f9cb5290b52eea564676971aa714"
        },
        "date": 1767596769519,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 284.17074905343173,
            "unit": "iter/sec",
            "range": "stddev: 0.001518003618325545",
            "extra": "mean: 3.5190110288655116 msec\nrounds: 104"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1838.3695010350268,
            "unit": "iter/sec",
            "range": "stddev: 0.000022295873283086563",
            "extra": "mean: 543.9602862411427 usec\nrounds: 1366"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 3.9776525930926203,
            "unit": "iter/sec",
            "range": "stddev: 0.016235014041957423",
            "extra": "mean: 251.40456000017363 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.688777059176964,
            "unit": "iter/sec",
            "range": "stddev: 0.011854032369807112",
            "extra": "mean: 63.739831105258894 msec\nrounds: 19"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 142.72010997783863,
            "unit": "iter/sec",
            "range": "stddev: 0.003669114876402512",
            "extra": "mean: 7.006721058127538 msec\nrounds: 172"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 13.005061013786467,
            "unit": "iter/sec",
            "range": "stddev: 0.02037387064824263",
            "extra": "mean: 76.89314174996298 msec\nrounds: 16"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "29139614+renovate[bot]@users.noreply.github.com",
            "name": "renovate[bot]",
            "username": "renovate[bot]"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "0a56d1738d597f9bd70c127157e669e785c8a7b3",
          "message": "chore(deps): update all non-major dependencies (#71)\n\nCo-authored-by: renovate[bot] <29139614+renovate[bot]@users.noreply.github.com>",
          "timestamp": "2026-01-12T05:42:22Z",
          "tree_id": "3c543eaa01abc1689a5cf9b8c537a05c95e3b78c",
          "url": "https://github.com/jvllmr/sqlalchemy-sessionload/commit/0a56d1738d597f9bd70c127157e669e785c8a7b3"
        },
        "date": 1768196586005,
        "tool": "pytest",
        "benches": [
          {
            "name": "tests/test_options.py::test_basic_load",
            "value": 346.49042841727226,
            "unit": "iter/sec",
            "range": "stddev: 0.0012679845382318389",
            "extra": "mean: 2.886082610038849 msec\nrounds: 259"
          },
          {
            "name": "tests/test_options.py::test_basic_load_with_option",
            "value": 1996.6855817406258,
            "unit": "iter/sec",
            "range": "stddev: 0.000010982429318792301",
            "extra": "mean: 500.82998001530234 usec\nrounds: 1301"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options0-lib_options0]",
            "value": 4.085182439827619,
            "unit": "iter/sec",
            "range": "stddev: 0.012447585567453968",
            "extra": "mean: 244.78710919999855 msec\nrounds: 5"
          },
          {
            "name": "tests/test_options.py::test_relationship_load[basic_options1-lib_options1]",
            "value": 15.415206341678742,
            "unit": "iter/sec",
            "range": "stddev: 0.013382589341858233",
            "extra": "mean: 64.87100969230998 msec\nrounds: 13"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options0-lib_options0]",
            "value": 177.76371694995913,
            "unit": "iter/sec",
            "range": "stddev: 0.002827208468241108",
            "extra": "mean: 5.625444928570559 msec\nrounds: 168"
          },
          {
            "name": "tests/test_options.py::test_relationship_load_option[basic_options1-lib_options1]",
            "value": 15.204181399232702,
            "unit": "iter/sec",
            "range": "stddev: 0.013200747429890075",
            "extra": "mean: 65.77138050000286 msec\nrounds: 12"
          }
        ]
      }
    ]
  }
}